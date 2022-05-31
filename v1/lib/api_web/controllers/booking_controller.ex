defmodule ApiWeb.BookingController do
  use ApiWeb, :controller

  alias Api.Logistics
  alias Api.Logistics.Booking

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    bookings = Logistics.list_bookings()
    render(conn, "index.json", bookings: bookings)
  end

  def create(conn, %{"booking" => booking_params}) do
    with {:ok, %Booking{} = booking} <- Logistics.create_booking(booking_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.booking_path(conn, :show, booking))
      |> render("show.json", booking: booking)
    end
  end

  def show(conn, %{"id" => id}) do
    booking = Logistics.get_booking!(id)
    render(conn, "show.json", booking: booking)
  end

  def update(conn, %{"id" => id, "booking" => booking_params}) do
    booking = Logistics.get_booking!(id)

    with {:ok, %Booking{} = booking} <- Logistics.update_booking(booking, booking_params) do
      render(conn, "show.json", booking: booking)
    end
  end

  def delete(conn, %{"id" => id}) do
    booking = Logistics.get_booking!(id)

    with {:ok, %Booking{}} <- Logistics.delete_booking(booking) do
      send_resp(conn, :no_content, "")
    end
  end
end
