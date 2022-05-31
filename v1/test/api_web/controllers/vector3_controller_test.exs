defmodule ApiWeb.Vector3ControllerTest do
  use ApiWeb.ConnCase

  import Api.Utils.MathsFixtures

  alias Api.Utils.Maths.Vector3

  @create_attrs %{
    x: 120.5,
    y: 120.5,
    z: 120.5
  }
  @update_attrs %{
    x: 456.7,
    y: 456.7,
    z: 456.7
  }
  @invalid_attrs %{x: nil, y: nil, z: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all vector3", %{conn: conn} do
      conn = get(conn, Routes.vector3_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create vector3" do
    test "renders vector3 when data is valid", %{conn: conn} do
      conn = post(conn, Routes.vector3_path(conn, :create), vector3: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.vector3_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "x" => 120.5,
               "y" => 120.5,
               "z" => 120.5
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.vector3_path(conn, :create), vector3: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update vector3" do
    setup [:create_vector3]

    test "renders vector3 when data is valid", %{conn: conn, vector3: %Vector3{id: id} = vector3} do
      conn = put(conn, Routes.vector3_path(conn, :update, vector3), vector3: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.vector3_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "x" => 456.7,
               "y" => 456.7,
               "z" => 456.7
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, vector3: vector3} do
      conn = put(conn, Routes.vector3_path(conn, :update, vector3), vector3: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete vector3" do
    setup [:create_vector3]

    test "deletes chosen vector3", %{conn: conn, vector3: vector3} do
      conn = delete(conn, Routes.vector3_path(conn, :delete, vector3))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.vector3_path(conn, :show, vector3))
      end
    end
  end

  defp create_vector3(_) do
    vector3 = vector3_fixture()
    %{vector3: vector3}
  end
end
