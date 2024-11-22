import SingleMovieResultItem from './SingleMovieResultItem.jsx';
function MoviesResults({ searchResults, setSingleMovie, movieResultsLoading }) {
  return (
    <div className="movies-results column__movies-content">
      {movieResultsLoading && !searchResults && (
        <p className="msg msg--loading">Loading...</p>
      )}
      {!searchResults && !movieResultsLoading && (
        <p className="msg msg--info">Search for movies 🎞️</p>
      )}
      {searchResults &&
        searchResults.Response === 'True' &&
        searchResults.Search.map((movie) => (
          <SingleMovieResultItem
            key={movie.imdbID}
            movieObject={movie}
            setSingleMovie={setSingleMovie}
          />
        ))}
      {searchResults && searchResults.Response === 'False' && (
        <p className="msg msg--info">{searchResults.Error} 🤔</p>
      )}
    </div>
  );
}

export default MoviesResults;
