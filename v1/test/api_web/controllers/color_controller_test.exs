defmodule ApiWeb.ColorControllerTest do
  use ApiWeb.ConnCase

  import Api.Utils.MathsFixtures

  alias Api.Utils.Maths.Color

  @create_attrs %{
    label: "some label"
  }
  @update_attrs %{
    label: "some updated label"
  }
  @invalid_attrs %{label: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all colors", %{conn: conn} do
      conn = get(conn, Routes.color_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create color" do
    test "renders color when data is valid", %{conn: conn} do
      conn = post(conn, Routes.color_path(conn, :create), color: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.color_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "label" => "some label"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.color_path(conn, :create), color: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update color" do
    setup [:create_color]

    test "renders color when data is valid", %{conn: conn, color: %Color{id: id} = color} do
      conn = put(conn, Routes.color_path(conn, :update, color), color: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.color_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "label" => "some updated label"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, color: color} do
      conn = put(conn, Routes.color_path(conn, :update, color), color: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete color" do
    setup [:create_color]

    test "deletes chosen color", %{conn: conn, color: color} do
      conn = delete(conn, Routes.color_path(conn, :delete, color))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.color_path(conn, :show, color))
      end
    end
  end

  defp create_color(_) do
    color = color_fixture()
    %{color: color}
  end
end
