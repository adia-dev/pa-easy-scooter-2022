defmodule Api.Products.ScooterModel do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "scooter_models" do
    field :autonomy, :integer
    field :bluetooth, :boolean, default: false
    field :charging_time, :float
    field :engine_power, :integer
    field :foldable, :boolean, default: false
    field :integrated_screen, :boolean, default: false
    field :max_speed, :integer
    field :name, :string
    field :release_date, :naive_datetime
    field :weight, :integer
    field :folded_dimensions, :binary_id
    field :unfolded_dimensions, :binary_id
    field :main_color, :binary_id
    field :secondary_color, :binary_id
    field :tertiary_color, :binary_id

    timestamps()
  end

  @doc false
  def changeset(scooter_model, attrs) do
    scooter_model
    |> cast(attrs, [:name, :max_speed, :autonomy, :engine_power, :charging_time, :release_date, :weight, :foldable, :bluetooth, :integrated_screen])
    |> validate_required([:name, :max_speed, :autonomy, :engine_power, :charging_time, :release_date, :weight, :foldable, :bluetooth, :integrated_screen])
  end
end
