defmodule ApiWeb.Vector3Controller do
  use ApiWeb, :controller

  alias Api.Utils.Maths
  alias Api.Utils.Maths.Vector3

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    vector3 = Maths.list_vector3()
    render(conn, "index.json", vector3: vector3)
  end

  def create(conn, %{"vector3" => vector3_params}) do
    with {:ok, %Vector3{} = vector3} <- Maths.create_vector3(vector3_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.vector3_path(conn, :show, vector3))
      |> render("show.json", vector3: vector3)
    end
  end

  def show(conn, %{"id" => id}) do
    vector3 = Maths.get_vector3!(id)
    render(conn, "show.json", vector3: vector3)
  end

  def update(conn, %{"id" => id, "vector3" => vector3_params}) do
    vector3 = Maths.get_vector3!(id)

    with {:ok, %Vector3{} = vector3} <- Maths.update_vector3(vector3, vector3_params) do
      render(conn, "show.json", vector3: vector3)
    end
  end

  def delete(conn, %{"id" => id}) do
    vector3 = Maths.get_vector3!(id)

    with {:ok, %Vector3{}} <- Maths.delete_vector3(vector3) do
      send_resp(conn, :no_content, "")
    end
  end
end
