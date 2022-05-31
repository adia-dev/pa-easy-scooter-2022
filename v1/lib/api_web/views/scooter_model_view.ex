defmodule ApiWeb.ScooterModelView do
  use ApiWeb, :view
  alias ApiWeb.ScooterModelView

  def render("index.json", %{scooter_models: scooter_models}) do
    %{data: render_many(scooter_models, ScooterModelView, "scooter_model.json")}
  end

  def render("show.json", %{scooter_model: scooter_model}) do
    %{data: render_one(scooter_model, ScooterModelView, "scooter_model.json")}
  end

  def render("scooter_model.json", %{scooter_model: scooter_model}) do
    %{
      id: scooter_model.id,
      name: scooter_model.name,
      max_speed: scooter_model.max_speed,
      autonomy: scooter_model.autonomy,
      engine_power: scooter_model.engine_power,
      charging_time: scooter_model.charging_time,
      release_date: scooter_model.release_date,
      weight: scooter_model.weight,
      foldable: scooter_model.foldable,
      bluetooth: scooter_model.bluetooth,
      integrated_screen: scooter_model.integrated_screen
    }
  end
end
