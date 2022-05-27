defmodule ApiWeb.ScooterView do
  use ApiWeb, :view
  alias ApiWeb.ScooterView

  def render("index.json", %{scooters: scooters}) do
    %{data: render_many(scooters, ScooterView, "scooter.json")}
  end

  def render("show.json", %{scooter: scooter}) do
    %{data: render_one(scooter, ScooterView, "scooter.json")}
  end

  def render("scooter.json", %{scooter: scooter}) do
    %{
      id: scooter.id,
      status: scooter.status
    }
  end
end
