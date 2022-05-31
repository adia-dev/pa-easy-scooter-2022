# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Api.Repo.insert!(%Api.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Api.Repo
alias Api.{Accounts, Products, Logistics, Utils}

alias Accounts.User
alias Products.{ScooterModel, Scooter}
alias Logistics.Booking
alias Utils.Maths.{Color, Vector2, Vector3}

for i <- 1..10 do
  vector_3 =
    %Vector3{
      x: Enum.random(0..255),
      y: Enum.random(0..255),
      z: Enum.random(0..255)
    }
    |> Repo.insert!()

    color = %Color{
      vector_3: vector_3.id,
      label: "random"
    }

    scooter_model = %ScooterModel{
      name:
    }

end
