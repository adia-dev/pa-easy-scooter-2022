defmodule Api.Utils.MathsTest do
  use Api.DataCase

  alias Api.Utils.Maths

  describe "vector2" do
    alias Api.Utils.Maths.Vector2

    import Api.Utils.MathsFixtures

    @invalid_attrs %{x: nil, y: nil}

    test "list_vector2/0 returns all vector2" do
      vector2 = vector2_fixture()
      assert Maths.list_vector2() == [vector2]
    end

    test "get_vector2!/1 returns the vector2 with given id" do
      vector2 = vector2_fixture()
      assert Maths.get_vector2!(vector2.id) == vector2
    end

    test "create_vector2/1 with valid data creates a vector2" do
      valid_attrs = %{x: 120.5, y: 120.5}

      assert {:ok, %Vector2{} = vector2} = Maths.create_vector2(valid_attrs)
      assert vector2.x == 120.5
      assert vector2.y == 120.5
    end

    test "create_vector2/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Maths.create_vector2(@invalid_attrs)
    end

    test "update_vector2/2 with valid data updates the vector2" do
      vector2 = vector2_fixture()
      update_attrs = %{x: 456.7, y: 456.7}

      assert {:ok, %Vector2{} = vector2} = Maths.update_vector2(vector2, update_attrs)
      assert vector2.x == 456.7
      assert vector2.y == 456.7
    end

    test "update_vector2/2 with invalid data returns error changeset" do
      vector2 = vector2_fixture()
      assert {:error, %Ecto.Changeset{}} = Maths.update_vector2(vector2, @invalid_attrs)
      assert vector2 == Maths.get_vector2!(vector2.id)
    end

    test "delete_vector2/1 deletes the vector2" do
      vector2 = vector2_fixture()
      assert {:ok, %Vector2{}} = Maths.delete_vector2(vector2)
      assert_raise Ecto.NoResultsError, fn -> Maths.get_vector2!(vector2.id) end
    end

    test "change_vector2/1 returns a vector2 changeset" do
      vector2 = vector2_fixture()
      assert %Ecto.Changeset{} = Maths.change_vector2(vector2)
    end
  end

  describe "vector3" do
    alias Api.Utils.Maths.Vector3

    import Api.Utils.MathsFixtures

    @invalid_attrs %{x: nil, y: nil, z: nil}

    test "list_vector3/0 returns all vector3" do
      vector3 = vector3_fixture()
      assert Maths.list_vector3() == [vector3]
    end

    test "get_vector3!/1 returns the vector3 with given id" do
      vector3 = vector3_fixture()
      assert Maths.get_vector3!(vector3.id) == vector3
    end

    test "create_vector3/1 with valid data creates a vector3" do
      valid_attrs = %{x: 120.5, y: 120.5, z: 120.5}

      assert {:ok, %Vector3{} = vector3} = Maths.create_vector3(valid_attrs)
      assert vector3.x == 120.5
      assert vector3.y == 120.5
      assert vector3.z == 120.5
    end

    test "create_vector3/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Maths.create_vector3(@invalid_attrs)
    end

    test "update_vector3/2 with valid data updates the vector3" do
      vector3 = vector3_fixture()
      update_attrs = %{x: 456.7, y: 456.7, z: 456.7}

      assert {:ok, %Vector3{} = vector3} = Maths.update_vector3(vector3, update_attrs)
      assert vector3.x == 456.7
      assert vector3.y == 456.7
      assert vector3.z == 456.7
    end

    test "update_vector3/2 with invalid data returns error changeset" do
      vector3 = vector3_fixture()
      assert {:error, %Ecto.Changeset{}} = Maths.update_vector3(vector3, @invalid_attrs)
      assert vector3 == Maths.get_vector3!(vector3.id)
    end

    test "delete_vector3/1 deletes the vector3" do
      vector3 = vector3_fixture()
      assert {:ok, %Vector3{}} = Maths.delete_vector3(vector3)
      assert_raise Ecto.NoResultsError, fn -> Maths.get_vector3!(vector3.id) end
    end

    test "change_vector3/1 returns a vector3 changeset" do
      vector3 = vector3_fixture()
      assert %Ecto.Changeset{} = Maths.change_vector3(vector3)
    end
  end

  describe "colors" do
    alias Api.Utils.Maths.Color

    import Api.Utils.MathsFixtures

    @invalid_attrs %{label: nil}

    test "list_colors/0 returns all colors" do
      color = color_fixture()
      assert Maths.list_colors() == [color]
    end

    test "get_color!/1 returns the color with given id" do
      color = color_fixture()
      assert Maths.get_color!(color.id) == color
    end

    test "create_color/1 with valid data creates a color" do
      valid_attrs = %{label: "some label"}

      assert {:ok, %Color{} = color} = Maths.create_color(valid_attrs)
      assert color.label == "some label"
    end

    test "create_color/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Maths.create_color(@invalid_attrs)
    end

    test "update_color/2 with valid data updates the color" do
      color = color_fixture()
      update_attrs = %{label: "some updated label"}

      assert {:ok, %Color{} = color} = Maths.update_color(color, update_attrs)
      assert color.label == "some updated label"
    end

    test "update_color/2 with invalid data returns error changeset" do
      color = color_fixture()
      assert {:error, %Ecto.Changeset{}} = Maths.update_color(color, @invalid_attrs)
      assert color == Maths.get_color!(color.id)
    end

    test "delete_color/1 deletes the color" do
      color = color_fixture()
      assert {:ok, %Color{}} = Maths.delete_color(color)
      assert_raise Ecto.NoResultsError, fn -> Maths.get_color!(color.id) end
    end

    test "change_color/1 returns a color changeset" do
      color = color_fixture()
      assert %Ecto.Changeset{} = Maths.change_color(color)
    end
  end
end
