defmodule ApiWeb.ScooterModelControllerTest do
  use ApiWeb.ConnCase

  import Api.ProductsFixtures

  alias Api.Products.ScooterModel

  @create_attrs %{
    autonomy: 42,
    bluetooth: true,
    charging_time: 120.5,
    engine_power: 42,
    foldable: true,
    integrated_screen: true,
    max_speed: 42,
    name: "some name",
    release_date: ~N[2022-05-26 05:02:00],
    weight: 42
  }
  @update_attrs %{
    autonomy: 43,
    bluetooth: false,
    charging_time: 456.7,
    engine_power: 43,
    foldable: false,
    integrated_screen: false,
    max_speed: 43,
    name: "some updated name",
    release_date: ~N[2022-05-27 05:02:00],
    weight: 43
  }
  @invalid_attrs %{autonomy: nil, bluetooth: nil, charging_time: nil, engine_power: nil, foldable: nil, integrated_screen: nil, max_speed: nil, name: nil, release_date: nil, weight: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all scooter_models", %{conn: conn} do
      conn = get(conn, Routes.scooter_model_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create scooter_model" do
    test "renders scooter_model when data is valid", %{conn: conn} do
      conn = post(conn, Routes.scooter_model_path(conn, :create), scooter_model: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.scooter_model_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "autonomy" => 42,
               "bluetooth" => true,
               "charging_time" => 120.5,
               "engine_power" => 42,
               "foldable" => true,
               "integrated_screen" => true,
               "max_speed" => 42,
               "name" => "some name",
               "release_date" => "2022-05-26T05:02:00",
               "weight" => 42
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.scooter_model_path(conn, :create), scooter_model: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update scooter_model" do
    setup [:create_scooter_model]

    test "renders scooter_model when data is valid", %{conn: conn, scooter_model: %ScooterModel{id: id} = scooter_model} do
      conn = put(conn, Routes.scooter_model_path(conn, :update, scooter_model), scooter_model: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.scooter_model_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "autonomy" => 43,
               "bluetooth" => false,
               "charging_time" => 456.7,
               "engine_power" => 43,
               "foldable" => false,
               "integrated_screen" => false,
               "max_speed" => 43,
               "name" => "some updated name",
               "release_date" => "2022-05-27T05:02:00",
               "weight" => 43
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, scooter_model: scooter_model} do
      conn = put(conn, Routes.scooter_model_path(conn, :update, scooter_model), scooter_model: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete scooter_model" do
    setup [:create_scooter_model]

    test "deletes chosen scooter_model", %{conn: conn, scooter_model: scooter_model} do
      conn = delete(conn, Routes.scooter_model_path(conn, :delete, scooter_model))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.scooter_model_path(conn, :show, scooter_model))
      end
    end
  end

  defp create_scooter_model(_) do
    scooter_model = scooter_model_fixture()
    %{scooter_model: scooter_model}
  end
end
