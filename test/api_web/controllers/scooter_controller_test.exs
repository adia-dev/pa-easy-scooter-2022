defmodule ApiWeb.ScooterControllerTest do
  use ApiWeb.ConnCase

  import Api.ProductsFixtures

  alias Api.Products.Scooter

  @create_attrs %{
    status: :booked
  }
  @update_attrs %{
    status: :active
  }
  @invalid_attrs %{status: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all scooters", %{conn: conn} do
      conn = get(conn, Routes.scooter_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create scooter" do
    test "renders scooter when data is valid", %{conn: conn} do
      conn = post(conn, Routes.scooter_path(conn, :create), scooter: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.scooter_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "status" => "booked"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.scooter_path(conn, :create), scooter: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update scooter" do
    setup [:create_scooter]

    test "renders scooter when data is valid", %{conn: conn, scooter: %Scooter{id: id} = scooter} do
      conn = put(conn, Routes.scooter_path(conn, :update, scooter), scooter: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.scooter_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "status" => "active"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, scooter: scooter} do
      conn = put(conn, Routes.scooter_path(conn, :update, scooter), scooter: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete scooter" do
    setup [:create_scooter]

    test "deletes chosen scooter", %{conn: conn, scooter: scooter} do
      conn = delete(conn, Routes.scooter_path(conn, :delete, scooter))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.scooter_path(conn, :show, scooter))
      end
    end
  end

  defp create_scooter(_) do
    scooter = scooter_fixture()
    %{scooter: scooter}
  end
end
