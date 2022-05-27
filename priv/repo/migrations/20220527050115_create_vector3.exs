defmodule Api.Repo.Migrations.CreateVector3 do
  use Ecto.Migration

  def change do
    create table(:vector3, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :x, :float
      add :y, :float
      add :z, :float

      timestamps()
    end
  end
end
