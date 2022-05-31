defmodule Api.Products do
  @moduledoc """
  The Products context.
  """

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.Products.ScooterModel

  @doc """
  Returns the list of scooter_models.

  ## Examples

      iex> list_scooter_models()
      [%ScooterModel{}, ...]

  """
  def list_scooter_models do
    Repo.all(ScooterModel)
  end

  @doc """
  Gets a single scooter_model.

  Raises `Ecto.NoResultsError` if the Scooter model does not exist.

  ## Examples

      iex> get_scooter_model!(123)
      %ScooterModel{}

      iex> get_scooter_model!(456)
      ** (Ecto.NoResultsError)

  """
  def get_scooter_model!(id), do: Repo.get!(ScooterModel, id)

  @doc """
  Creates a scooter_model.

  ## Examples

      iex> create_scooter_model(%{field: value})
      {:ok, %ScooterModel{}}

      iex> create_scooter_model(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_scooter_model(attrs \\ %{}) do
    %ScooterModel{}
    |> ScooterModel.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a scooter_model.

  ## Examples

      iex> update_scooter_model(scooter_model, %{field: new_value})
      {:ok, %ScooterModel{}}

      iex> update_scooter_model(scooter_model, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_scooter_model(%ScooterModel{} = scooter_model, attrs) do
    scooter_model
    |> ScooterModel.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a scooter_model.

  ## Examples

      iex> delete_scooter_model(scooter_model)
      {:ok, %ScooterModel{}}

      iex> delete_scooter_model(scooter_model)
      {:error, %Ecto.Changeset{}}

  """
  def delete_scooter_model(%ScooterModel{} = scooter_model) do
    Repo.delete(scooter_model)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking scooter_model changes.

  ## Examples

      iex> change_scooter_model(scooter_model)
      %Ecto.Changeset{data: %ScooterModel{}}

  """
  def change_scooter_model(%ScooterModel{} = scooter_model, attrs \\ %{}) do
    ScooterModel.changeset(scooter_model, attrs)
  end

  alias Api.Products.Scooter

  @doc """
  Returns the list of scooters.

  ## Examples

      iex> list_scooters()
      [%Scooter{}, ...]

  """
  def list_scooters do
    Repo.all(Scooter)
  end

  @doc """
  Gets a single scooter.

  Raises `Ecto.NoResultsError` if the Scooter does not exist.

  ## Examples

      iex> get_scooter!(123)
      %Scooter{}

      iex> get_scooter!(456)
      ** (Ecto.NoResultsError)

  """
  def get_scooter!(id), do: Repo.get!(Scooter, id)

  @doc """
  Creates a scooter.

  ## Examples

      iex> create_scooter(%{field: value})
      {:ok, %Scooter{}}

      iex> create_scooter(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_scooter(attrs \\ %{}) do
    %Scooter{}
    |> Scooter.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a scooter.

  ## Examples

      iex> update_scooter(scooter, %{field: new_value})
      {:ok, %Scooter{}}

      iex> update_scooter(scooter, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_scooter(%Scooter{} = scooter, attrs) do
    scooter
    |> Scooter.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a scooter.

  ## Examples

      iex> delete_scooter(scooter)
      {:ok, %Scooter{}}

      iex> delete_scooter(scooter)
      {:error, %Ecto.Changeset{}}

  """
  def delete_scooter(%Scooter{} = scooter) do
    Repo.delete(scooter)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking scooter changes.

  ## Examples

      iex> change_scooter(scooter)
      %Ecto.Changeset{data: %Scooter{}}

  """
  def change_scooter(%Scooter{} = scooter, attrs \\ %{}) do
    Scooter.changeset(scooter, attrs)
  end
end
