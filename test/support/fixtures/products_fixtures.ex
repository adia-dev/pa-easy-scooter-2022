defmodule Api.ProductsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Products` context.
  """

  @doc """
  Generate a scooter_model.
  """
  def scooter_model_fixture(attrs \\ %{}) do
    {:ok, scooter_model} =
      attrs
      |> Enum.into(%{
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
      })
      |> Api.Products.create_scooter_model()

    scooter_model
  end

  @doc """
  Generate a scooter.
  """
  def scooter_fixture(attrs \\ %{}) do
    {:ok, scooter} =
      attrs
      |> Enum.into(%{
        status: :booked
      })
      |> Api.Products.create_scooter()

    scooter
  end
end
