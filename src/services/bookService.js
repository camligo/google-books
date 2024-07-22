const BASE_URL = "https://www.googleapis.com/books/v1/volumes"

export const getBooksBySearchTerm = async (searchTerm, maxResults = 40) => {
  const response = await fetch(`${BASE_URL}?q=${searchTerm}&maxResults=${maxResults}`);
  const data = await response.json();
  return data.items || [];
}

export const getBookById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
}
