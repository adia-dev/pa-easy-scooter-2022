defmodule Api.Repo.Migrations.CreateColors do
  use Ecto.Migration

  def change do
    create table(:colors, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :label, :string
      add :value, references(:vector3, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:colors, [:value])
  end
end
