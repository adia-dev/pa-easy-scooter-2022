defmodule ApiWeb.Vector2ControllerTest do
  use ApiWeb.ConnCase

  import Api.Utils.MathsFixtures

  alias Api.Utils.Maths.Vector2

  @create_attrs %{
    x: 120.5,
    y: 120.5
  }
  @update_attrs %{
    x: 456.7,
    y: 456.7
  }
  @invalid_attrs %{x: nil, y: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all vector2", %{conn: conn} do
      conn = get(conn, Routes.vector2_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create vector2" do
    test "renders vector2 when data is valid", %{conn: conn} do
      conn = post(conn, Routes.vector2_path(conn, :create), vector2: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.vector2_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "x" => 120.5,
               "y" => 120.5
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.vector2_path(conn, :create), vector2: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update vector2" do
    setup [:create_vector2]

    test "renders vector2 when data is valid", %{conn: conn, vector2: %Vector2{id: id} = vector2} do
      conn = put(conn, Routes.vector2_path(conn, :update, vector2), vector2: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.vector2_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "x" => 456.7,
               "y" => 456.7
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, vector2: vector2} do
      conn = put(conn, Routes.vector2_path(conn, :update, vector2), vector2: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete vector2" do
    setup [:create_vector2]

    test "deletes chosen vector2", %{conn: conn, vector2: vector2} do
      conn = delete(conn, Routes.vector2_path(conn, :delete, vector2))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.vector2_path(conn, :show, vector2))
      end
    end
  end

  defp create_vector2(_) do
    vector2 = vector2_fixture()
    %{vector2: vector2}
  end
end
