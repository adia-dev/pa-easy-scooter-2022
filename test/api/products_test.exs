defmodule Api.ProductsTest do
  use Api.DataCase

  alias Api.Products

  describe "scooter_models" do
    alias Api.Products.ScooterModel

    import Api.ProductsFixtures

    @invalid_attrs %{autonomy: nil, bluetooth: nil, charging_time: nil, engine_power: nil, foldable: nil, integrated_screen: nil, max_speed: nil, name: nil, release_date: nil, weight: nil}

    test "list_scooter_models/0 returns all scooter_models" do
      scooter_model = scooter_model_fixture()
      assert Products.list_scooter_models() == [scooter_model]
    end

    test "get_scooter_model!/1 returns the scooter_model with given id" do
      scooter_model = scooter_model_fixture()
      assert Products.get_scooter_model!(scooter_model.id) == scooter_model
    end

    test "create_scooter_model/1 with valid data creates a scooter_model" do
      valid_attrs = %{autonomy: 42, bluetooth: true, charging_time: 120.5, engine_power: 42, foldable: true, integrated_screen: true, max_speed: 42, name: "some name", release_date: ~N[2022-05-26 05:02:00], weight: 42}

      assert {:ok, %ScooterModel{} = scooter_model} = Products.create_scooter_model(valid_attrs)
      assert scooter_model.autonomy == 42
      assert scooter_model.bluetooth == true
      assert scooter_model.charging_time == 120.5
      assert scooter_model.engine_power == 42
      assert scooter_model.foldable == true
      assert scooter_model.integrated_screen == true
      assert scooter_model.max_speed == 42
      assert scooter_model.name == "some name"
      assert scooter_model.release_date == ~N[2022-05-26 05:02:00]
      assert scooter_model.weight == 42
    end

    test "create_scooter_model/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Products.create_scooter_model(@invalid_attrs)
    end

    test "update_scooter_model/2 with valid data updates the scooter_model" do
      scooter_model = scooter_model_fixture()
      update_attrs = %{autonomy: 43, bluetooth: false, charging_time: 456.7, engine_power: 43, foldable: false, integrated_screen: false, max_speed: 43, name: "some updated name", release_date: ~N[2022-05-27 05:02:00], weight: 43}

      assert {:ok, %ScooterModel{} = scooter_model} = Products.update_scooter_model(scooter_model, update_attrs)
      assert scooter_model.autonomy == 43
      assert scooter_model.bluetooth == false
      assert scooter_model.charging_time == 456.7
      assert scooter_model.engine_power == 43
      assert scooter_model.foldable == false
      assert scooter_model.integrated_screen == false
      assert scooter_model.max_speed == 43
      assert scooter_model.name == "some updated name"
      assert scooter_model.release_date == ~N[2022-05-27 05:02:00]
      assert scooter_model.weight == 43
    end

    test "update_scooter_model/2 with invalid data returns error changeset" do
      scooter_model = scooter_model_fixture()
      assert {:error, %Ecto.Changeset{}} = Products.update_scooter_model(scooter_model, @invalid_attrs)
      assert scooter_model == Products.get_scooter_model!(scooter_model.id)
    end

    test "delete_scooter_model/1 deletes the scooter_model" do
      scooter_model = scooter_model_fixture()
      assert {:ok, %ScooterModel{}} = Products.delete_scooter_model(scooter_model)
      assert_raise Ecto.NoResultsError, fn -> Products.get_scooter_model!(scooter_model.id) end
    end

    test "change_scooter_model/1 returns a scooter_model changeset" do
      scooter_model = scooter_model_fixture()
      assert %Ecto.Changeset{} = Products.change_scooter_model(scooter_model)
    end
  end

  describe "scooters" do
    alias Api.Products.Scooter

    import Api.ProductsFixtures

    @invalid_attrs %{status: nil}

    test "list_scooters/0 returns all scooters" do
      scooter = scooter_fixture()
      assert Products.list_scooters() == [scooter]
    end

    test "get_scooter!/1 returns the scooter with given id" do
      scooter = scooter_fixture()
      assert Products.get_scooter!(scooter.id) == scooter
    end

    test "create_scooter/1 with valid data creates a scooter" do
      valid_attrs = %{status: :booked}

      assert {:ok, %Scooter{} = scooter} = Products.create_scooter(valid_attrs)
      assert scooter.status == :booked
    end

    test "create_scooter/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Products.create_scooter(@invalid_attrs)
    end

    test "update_scooter/2 with valid data updates the scooter" do
      scooter = scooter_fixture()
      update_attrs = %{status: :active}

      assert {:ok, %Scooter{} = scooter} = Products.update_scooter(scooter, update_attrs)
      assert scooter.status == :active
    end

    test "update_scooter/2 with invalid data returns error changeset" do
      scooter = scooter_fixture()
      assert {:error, %Ecto.Changeset{}} = Products.update_scooter(scooter, @invalid_attrs)
      assert scooter == Products.get_scooter!(scooter.id)
    end

    test "delete_scooter/1 deletes the scooter" do
      scooter = scooter_fixture()
      assert {:ok, %Scooter{}} = Products.delete_scooter(scooter)
      assert_raise Ecto.NoResultsError, fn -> Products.get_scooter!(scooter.id) end
    end

    test "change_scooter/1 returns a scooter changeset" do
      scooter = scooter_fixture()
      assert %Ecto.Changeset{} = Products.change_scooter(scooter)
    end
  end
end
