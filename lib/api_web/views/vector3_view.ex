defmodule ApiWeb.Vector3View do
  use ApiWeb, :view
  alias ApiWeb.Vector3View

  def render("index.json", %{vector3: vector3}) do
    %{data: render_many(vector3, Vector3View, "vector3.json")}
  end

  def render("show.json", %{vector3: vector3}) do
    %{data: render_one(vector3, Vector3View, "vector3.json")}
  end

  def render("vector3.json", %{vector3: vector3}) do
    %{
      id: vector3.id,
      x: vector3.x,
      y: vector3.y,
      z: vector3.z
    }
  end
end
