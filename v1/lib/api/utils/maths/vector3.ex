defmodule Api.Utils.Maths.Vector3 do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "vector3" do
    field :x, :float
    field :y, :float
    field :z, :float

    timestamps()
  end

  @doc false
  def changeset(vector3, attrs) do
    vector3
    |> cast(attrs, [:x, :y, :z])
    |> validate_required([:x, :y, :z])
  end
end
