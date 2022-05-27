defmodule Api.Utils.Maths.Vector2 do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "vector2" do
    field :x, :float
    field :y, :float

    timestamps()
  end

  @doc false
  def changeset(vector2, attrs) do
    vector2
    |> cast(attrs, [:x, :y])
    |> validate_required([:x, :y])
  end
end
