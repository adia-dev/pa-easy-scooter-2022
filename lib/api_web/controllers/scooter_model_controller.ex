defmodule ApiWeb.ScooterModelController do
  use ApiWeb, :controller

  alias Api.Products
  alias Api.Products.ScooterModel

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    scooter_models = Products.list_scooter_models()
    render(conn, "index.json", scooter_models: scooter_models)
  end

  def create(conn, %{"scooter_model" => scooter_model_params}) do
    with {:ok, %ScooterModel{} = scooter_model} <- Products.create_scooter_model(scooter_model_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.scooter_model_path(conn, :show, scooter_model))
      |> render("show.json", scooter_model: scooter_model)
    end
  end

  def show(conn, %{"id" => id}) do
    scooter_model = Products.get_scooter_model!(id)
    render(conn, "show.json", scooter_model: scooter_model)
  end

  def update(conn, %{"id" => id, "scooter_model" => scooter_model_params}) do
    scooter_model = Products.get_scooter_model!(id)

    with {:ok, %ScooterModel{} = scooter_model} <- Products.update_scooter_model(scooter_model, scooter_model_params) do
      render(conn, "show.json", scooter_model: scooter_model)
    end
  end

  def delete(conn, %{"id" => id}) do
    scooter_model = Products.get_scooter_model!(id)

    with {:ok, %ScooterModel{}} <- Products.delete_scooter_model(scooter_model) do
      send_resp(conn, :no_content, "")
    end
  end
end
