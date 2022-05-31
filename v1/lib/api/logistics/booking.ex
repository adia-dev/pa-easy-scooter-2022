defmodule Api.Logistics.Booking do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "bookings" do
    field :begin, :naive_datetime
    field :end, :naive_datetime
    field :status, Ecto.Enum, values: [:pending, :active, :canceled, :completed, :issue]
    field :scooter, :binary_id
    field :user, :binary_id

    timestamps()
  end

  @doc false
  def changeset(booking, attrs) do
    booking
    |> cast(attrs, [:status, :begin, :end])
    |> validate_required([:status, :begin, :end])
  end
end
