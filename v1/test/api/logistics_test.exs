defmodule Api.LogisticsTest do
  use Api.DataCase

  alias Api.Logistics

  describe "bookings" do
    alias Api.Logistics.Booking

    import Api.LogisticsFixtures

    @invalid_attrs %{begin: nil, end: nil, status: nil}

    test "list_bookings/0 returns all bookings" do
      booking = booking_fixture()
      assert Logistics.list_bookings() == [booking]
    end

    test "get_booking!/1 returns the booking with given id" do
      booking = booking_fixture()
      assert Logistics.get_booking!(booking.id) == booking
    end

    test "create_booking/1 with valid data creates a booking" do
      valid_attrs = %{begin: ~N[2022-05-26 05:11:00], end: ~N[2022-05-26 05:11:00], status: :pending}

      assert {:ok, %Booking{} = booking} = Logistics.create_booking(valid_attrs)
      assert booking.begin == ~N[2022-05-26 05:11:00]
      assert booking.end == ~N[2022-05-26 05:11:00]
      assert booking.status == :pending
    end

    test "create_booking/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Logistics.create_booking(@invalid_attrs)
    end

    test "update_booking/2 with valid data updates the booking" do
      booking = booking_fixture()
      update_attrs = %{begin: ~N[2022-05-27 05:11:00], end: ~N[2022-05-27 05:11:00], status: :active}

      assert {:ok, %Booking{} = booking} = Logistics.update_booking(booking, update_attrs)
      assert booking.begin == ~N[2022-05-27 05:11:00]
      assert booking.end == ~N[2022-05-27 05:11:00]
      assert booking.status == :active
    end

    test "update_booking/2 with invalid data returns error changeset" do
      booking = booking_fixture()
      assert {:error, %Ecto.Changeset{}} = Logistics.update_booking(booking, @invalid_attrs)
      assert booking == Logistics.get_booking!(booking.id)
    end

    test "delete_booking/1 deletes the booking" do
      booking = booking_fixture()
      assert {:ok, %Booking{}} = Logistics.delete_booking(booking)
      assert_raise Ecto.NoResultsError, fn -> Logistics.get_booking!(booking.id) end
    end

    test "change_booking/1 returns a booking changeset" do
      booking = booking_fixture()
      assert %Ecto.Changeset{} = Logistics.change_booking(booking)
    end
  end
end
