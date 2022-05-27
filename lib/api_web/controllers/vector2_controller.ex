defmodule ApiWeb.Vector2Controller do
  use ApiWeb, :controller

  alias Api.Utils.Maths
  alias Api.Utils.Maths.Vector2

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    vector2 = Maths.list_vector2()
    render(conn, "index.json", vector2: vector2)
  end

  def create(conn, %{"vector2" => vector2_params}) do
    with {:ok, %Vector2{} = vector2} <- Maths.create_vector2(vector2_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.vector2_path(conn, :show, vector2))
      |> render("show.json", vector2: vector2)
    end
  end

  def show(conn, %{"id" => id}) do
    vector2 = Maths.get_vector2!(id)
    render(conn, "show.json", vector2: vector2)
  end

  def update(conn, %{"id" => id, "vector2" => vector2_params}) do
    vector2 = Maths.get_vector2!(id)

    with {:ok, %Vector2{} = vector2} <- Maths.update_vector2(vector2, vector2_params) do
      render(conn, "show.json", vector2: vector2)
    end
  end

  def delete(conn, %{"id" => id}) do
    vector2 = Maths.get_vector2!(id)

    with {:ok, %Vector2{}} <- Maths.delete_vector2(vector2) do
      send_resp(conn, :no_content, "")
    end
  end
end
