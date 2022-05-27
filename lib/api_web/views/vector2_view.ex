defmodule ApiWeb.Vector2View do
  use ApiWeb, :view
  alias ApiWeb.Vector2View

  def render("index.json", %{vector2: vector2}) do
    %{data: render_many(vector2, Vector2View, "vector2.json")}
  end

  def render("show.json", %{vector2: vector2}) do
    %{data: render_one(vector2, Vector2View, "vector2.json")}
  end

  def render("vector2.json", %{vector2: vector2}) do
    %{
      id: vector2.id,
      x: vector2.x,
      y: vector2.y
    }
  end
end
