defmodule Api.Utils.Maths.Color do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "colors" do
    field :label, :string
    field :value, :binary_id

    timestamps()
  end

  @doc false
  def changeset(color, attrs) do
    color
    |> cast(attrs, [:label])
    |> validate_required([:label])
  end
end
