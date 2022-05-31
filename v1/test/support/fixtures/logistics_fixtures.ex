defmodule Api.LogisticsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Logistics` context.
  """

  @doc """
  Generate a booking.
  """
  def booking_fixture(attrs \\ %{}) do
    {:ok, booking} =
      attrs
      |> Enum.into(%{
        begin: ~N[2022-05-26 05:11:00],
        end: ~N[2022-05-26 05:11:00],
        status: :pending
      })
      |> Api.Logistics.create_booking()

    booking
  end
end
