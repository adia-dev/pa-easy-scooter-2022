defmodule Api.Utils.Maths do
  @moduledoc """
  The Utils.Maths context.
  """

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.Utils.Maths.Vector2

  @doc """
  Returns the list of vector2.

  ## Examples

      iex> list_vector2()
      [%Vector2{}, ...]

  """
  def list_vector2 do
    Repo.all(Vector2)
  end

  @doc """
  Gets a single vector2.

  Raises `Ecto.NoResultsError` if the Vector2 does not exist.

  ## Examples

      iex> get_vector2!(123)
      %Vector2{}

      iex> get_vector2!(456)
      ** (Ecto.NoResultsError)

  """
  def get_vector2!(id), do: Repo.get!(Vector2, id)

  @doc """
  Creates a vector2.

  ## Examples

      iex> create_vector2(%{field: value})
      {:ok, %Vector2{}}

      iex> create_vector2(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_vector2(attrs \\ %{}) do
    %Vector2{}
    |> Vector2.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a vector2.

  ## Examples

      iex> update_vector2(vector2, %{field: new_value})
      {:ok, %Vector2{}}

      iex> update_vector2(vector2, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_vector2(%Vector2{} = vector2, attrs) do
    vector2
    |> Vector2.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a vector2.

  ## Examples

      iex> delete_vector2(vector2)
      {:ok, %Vector2{}}

      iex> delete_vector2(vector2)
      {:error, %Ecto.Changeset{}}

  """
  def delete_vector2(%Vector2{} = vector2) do
    Repo.delete(vector2)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking vector2 changes.

  ## Examples

      iex> change_vector2(vector2)
      %Ecto.Changeset{data: %Vector2{}}

  """
  def change_vector2(%Vector2{} = vector2, attrs \\ %{}) do
    Vector2.changeset(vector2, attrs)
  end

  alias Api.Utils.Maths.Vector3

  @doc """
  Returns the list of vector3.

  ## Examples

      iex> list_vector3()
      [%Vector3{}, ...]

  """
  def list_vector3 do
    Repo.all(Vector3)
  end

  @doc """
  Gets a single vector3.

  Raises `Ecto.NoResultsError` if the Vector3 does not exist.

  ## Examples

      iex> get_vector3!(123)
      %Vector3{}

      iex> get_vector3!(456)
      ** (Ecto.NoResultsError)

  """
  def get_vector3!(id), do: Repo.get!(Vector3, id)

  @doc """
  Creates a vector3.

  ## Examples

      iex> create_vector3(%{field: value})
      {:ok, %Vector3{}}

      iex> create_vector3(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_vector3(attrs \\ %{}) do
    %Vector3{}
    |> Vector3.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a vector3.

  ## Examples

      iex> update_vector3(vector3, %{field: new_value})
      {:ok, %Vector3{}}

      iex> update_vector3(vector3, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_vector3(%Vector3{} = vector3, attrs) do
    vector3
    |> Vector3.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a vector3.

  ## Examples

      iex> delete_vector3(vector3)
      {:ok, %Vector3{}}

      iex> delete_vector3(vector3)
      {:error, %Ecto.Changeset{}}

  """
  def delete_vector3(%Vector3{} = vector3) do
    Repo.delete(vector3)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking vector3 changes.

  ## Examples

      iex> change_vector3(vector3)
      %Ecto.Changeset{data: %Vector3{}}

  """
  def change_vector3(%Vector3{} = vector3, attrs \\ %{}) do
    Vector3.changeset(vector3, attrs)
  end

  alias Api.Utils.Maths.Color

  @doc """
  Returns the list of colors.

  ## Examples

      iex> list_colors()
      [%Color{}, ...]

  """
  def list_colors do
    Repo.all(Color)
  end

  @doc """
  Gets a single color.

  Raises `Ecto.NoResultsError` if the Color does not exist.

  ## Examples

      iex> get_color!(123)
      %Color{}

      iex> get_color!(456)
      ** (Ecto.NoResultsError)

  """
  def get_color!(id), do: Repo.get!(Color, id)

  @doc """
  Creates a color.

  ## Examples

      iex> create_color(%{field: value})
      {:ok, %Color{}}

      iex> create_color(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_color(attrs \\ %{}) do
    %Color{}
    |> Color.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a color.

  ## Examples

      iex> update_color(color, %{field: new_value})
      {:ok, %Color{}}

      iex> update_color(color, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_color(%Color{} = color, attrs) do
    color
    |> Color.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a color.

  ## Examples

      iex> delete_color(color)
      {:ok, %Color{}}

      iex> delete_color(color)
      {:error, %Ecto.Changeset{}}

  """
  def delete_color(%Color{} = color) do
    Repo.delete(color)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking color changes.

  ## Examples

      iex> change_color(color)
      %Ecto.Changeset{data: %Color{}}

  """
  def change_color(%Color{} = color, attrs \\ %{}) do
    Color.changeset(color, attrs)
  end
end
