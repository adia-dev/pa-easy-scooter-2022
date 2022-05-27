defmodule Api.Repo.Migrations.CreateScooters do
  use Ecto.Migration

  def change do
    create table(:scooters, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :status, :string
      add :model, references(:scooter_models, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:scooters, [:model])
  end
end
