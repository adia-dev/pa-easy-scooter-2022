defmodule Api.Repo.Migrations.CreateScooterModels do
  use Ecto.Migration

  def change do
    create table(:scooter_models, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :name, :string
      add :max_speed, :integer
      add :autonomy, :integer
      add :engine_power, :integer
      add :charging_time, :float
      add :release_date, :naive_datetime
      add :weight, :integer
      add :foldable, :boolean, default: false, null: false
      add :bluetooth, :boolean, default: false, null: false
      add :integrated_screen, :boolean, default: false, null: false
      add :folded_dimensions, references(:vector3, on_delete: :nothing, type: :binary_id)
      add :unfolded_dimensions, references(:vector3, on_delete: :nothing, type: :binary_id)
      add :main_color, references(:colors, on_delete: :nothing, type: :binary_id)
      add :secondary_color, references(:colors, on_delete: :nothing, type: :binary_id)
      add :tertiary_color, references(:colors, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:scooter_models, [:folded_dimensions])
    create index(:scooter_models, [:unfolded_dimensions])
    create index(:scooter_models, [:main_color])
    create index(:scooter_models, [:secondary_color])
    create index(:scooter_models, [:tertiary_color])
  end
end
