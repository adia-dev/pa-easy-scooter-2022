defmodule ApiWeb.ColorView do
  use ApiWeb, :view
  alias ApiWeb.ColorView

  def render("index.json", %{colors: colors}) do
    %{data: render_many(colors, ColorView, "color.json")}
  end

  def render("show.json", %{color: color}) do
    %{data: render_one(color, ColorView, "color.json")}
  end

  def render("color.json", %{color: color}) do
    %{
      id: color.id,
      label: color.label
    }
  end
end
