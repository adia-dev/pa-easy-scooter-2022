defmodule Api.Repo.Migrations.CreateVector2 do
  use Ecto.Migration

  def change do
    create table(:vector2, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :x, :float
      add :y, :float

      timestamps()
    end
  end
end
