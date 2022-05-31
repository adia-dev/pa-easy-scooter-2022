defmodule ApiWeb.ScooterController do
  use ApiWeb, :controller

  alias Api.Products
  alias Api.Products.Scooter

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    scooters = Products.list_scooters()
    render(conn, "index.json", scooters: scooters)
  end

  def create(conn, %{"scooter" => scooter_params}) do
    with {:ok, %Scooter{} = scooter} <- Products.create_scooter(scooter_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.scooter_path(conn, :show, scooter))
      |> render("show.json", scooter: scooter)
    end
  end

  def show(conn, %{"id" => id}) do
    scooter = Products.get_scooter!(id)
    render(conn, "show.json", scooter: scooter)
  end

  def update(conn, %{"id" => id, "scooter" => scooter_params}) do
    scooter = Products.get_scooter!(id)

    with {:ok, %Scooter{} = scooter} <- Products.update_scooter(scooter, scooter_params) do
      render(conn, "show.json", scooter: scooter)
    end
  end

  def delete(conn, %{"id" => id}) do
    scooter = Products.get_scooter!(id)

    with {:ok, %Scooter{}} <- Products.delete_scooter(scooter) do
      send_resp(conn, :no_content, "")
    end
  end
end
