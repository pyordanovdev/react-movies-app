export default async function fetchMoviesDataBySearchQuery(searchQuery) {
  const searchRequestEndpoint = import.meta.env
    .VITE_OMDB_SEARCH__BY_QUERY_ENDPOINT;
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  try {
    const response = await fetch(
      `${searchRequestEndpoint}${searchQuery}&apikey=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching movies:', err);
    throw err;
  }
}
