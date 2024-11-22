import { useEffect, useState } from 'react';
import fetchMoviesDataBySearchQuery from '../Services/fetchMoviesDataBySearchQuery';
function Header({ searchResults, setSearchResults }) {
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      if (!searchInput) return;
      const data = await fetchMoviesDataBySearchQuery(searchInput);
      setSearchResults(data);
      console.log(data);
    };
    const delayFn = setTimeout(() => {
      fetchData();
    }, 2000);
    return () => clearTimeout(delayFn);
  }, [searchInput]);
  return (
    <header className="container">
      <div className="logo__header">🍿React Movies App</div>
      <div className="search__header">
        <input
          type="input"
          placeholder="Search for movies..."
          className="search-input"
          value={searchInput}
          onChange={(e) => {
            if (!e.target.value) setSearchResults(null);
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <div className="results-found__header">
        Found{' '}
        <span className="count__results-found">
          {searchResults && searchResults.Response === 'True'
            ? searchResults.totalResults
            : '0'}
        </span>{' '}
        results
      </div>
    </header>
  );
}

export default Header;
