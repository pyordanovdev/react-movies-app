import { useState } from 'react';
import Header from './Components/Header.jsx';
import MoviesResults from './Components/MoviesResults.jsx';
import SingleMovieView from './Components/SingleMovieView.jsx';
function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [singleMovie, setSingleMovie] = useState(null);
  const [movieStats, setMovieStats] = useState({
    totalMoviesWatched: 0,
    totalStarRatings: 0,
    totalMinutesWatched: 0,
  });
  return (
    <>
      <Header
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <div className="container movies-content">
        <MoviesResults
          searchResults={searchResults}
          setSingleMovie={setSingleMovie}
        />
        <SingleMovieView singleMovie={singleMovie} movieStats={movieStats} />
      </div>
    </>
  );
}

export default App;
