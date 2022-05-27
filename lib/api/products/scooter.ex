defmodule Api.Products.Scooter do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "scooters" do
    field :status, Ecto.Enum, values: [:booked, :active, :available, :out_of_stock, :being_repaired, :broken]
    field :model, :binary_id

    timestamps()
  end

  @doc false
  def changeset(scooter, attrs) do
    scooter
    |> cast(attrs, [:status])
    |> validate_required([:status])
  end
end
