import SummaryStats from './SummaryStats.jsx';
function SingleMovieView({ singleMovie, movieStats }) {
  return (
    <div className="column__movies-content">
      {movieStats && <SummaryStats movieStats={movieStats} />}
      {singleMovie ? (
        'single movie'
      ) : (
        <p className="msg msg--info">Choose a movie to view details 🎥</p>
      )}
    </div>
  );
}

export default SingleMovieView;
