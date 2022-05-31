defmodule ApiWeb.BookingView do
  use ApiWeb, :view
  alias ApiWeb.BookingView

  def render("index.json", %{bookings: bookings}) do
    %{data: render_many(bookings, BookingView, "booking.json")}
  end

  def render("show.json", %{booking: booking}) do
    %{data: render_one(booking, BookingView, "booking.json")}
  end

  def render("booking.json", %{booking: booking}) do
    %{
      id: booking.id,
      status: booking.status,
      begin: booking.begin,
      end: booking.end
    }
  end
end
