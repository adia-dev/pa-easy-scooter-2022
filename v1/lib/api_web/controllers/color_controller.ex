defmodule ApiWeb.ColorController do
  use ApiWeb, :controller

  alias Api.Utils.Maths
  alias Api.Utils.Maths.Color

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    colors = Maths.list_colors()
    render(conn, "index.json", colors: colors)
  end

  def create(conn, %{"color" => color_params}) do
    with {:ok, %Color{} = color} <- Maths.create_color(color_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.color_path(conn, :show, color))
      |> render("show.json", color: color)
    end
  end

  def show(conn, %{"id" => id}) do
    color = Maths.get_color!(id)
    render(conn, "show.json", color: color)
  end

  def update(conn, %{"id" => id, "color" => color_params}) do
    color = Maths.get_color!(id)

    with {:ok, %Color{} = color} <- Maths.update_color(color, color_params) do
      render(conn, "show.json", color: color)
    end
  end

  def delete(conn, %{"id" => id}) do
    color = Maths.get_color!(id)

    with {:ok, %Color{}} <- Maths.delete_color(color) do
      send_resp(conn, :no_content, "")
    end
  end
end
