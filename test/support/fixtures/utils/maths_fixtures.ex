defmodule Api.Utils.MathsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Utils.Maths` context.
  """

  @doc """
  Generate a vector2.
  """
  def vector2_fixture(attrs \\ %{}) do
    {:ok, vector2} =
      attrs
      |> Enum.into(%{
        x: 120.5,
        y: 120.5
      })
      |> Api.Utils.Maths.create_vector2()

    vector2
  end

  @doc """
  Generate a vector3.
  """
  def vector3_fixture(attrs \\ %{}) do
    {:ok, vector3} =
      attrs
      |> Enum.into(%{
        x: 120.5,
        y: 120.5,
        z: 120.5
      })
      |> Api.Utils.Maths.create_vector3()

    vector3
  end

  @doc """
  Generate a color.
  """
  def color_fixture(attrs \\ %{}) do
    {:ok, color} =
      attrs
      |> Enum.into(%{
        label: "some label"
      })
      |> Api.Utils.Maths.create_color()

    color
  end
end
