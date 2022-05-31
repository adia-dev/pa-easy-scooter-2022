defmodule Api.Repo.Migrations.CreateBookings do
  use Ecto.Migration

  def change do
    create table(:bookings, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :status, :string
      add :begin, :naive_datetime
      add :end, :naive_datetime
      add :scooter, references(:scooters, on_delete: :nothing, type: :binary_id)
      add :user, references(:users, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:bookings, [:scooter])
    create index(:bookings, [:user])
  end
end
