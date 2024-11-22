function SummaryStats({ movieStats }) {
  return (
    <div className="stats-summary">
      <div className="title__stats-summary">Your Movies Summary</div>
      <div className="stats-wrapper">
        <div className="stat-item">
          🎦 {movieStats.totalMoviesWatched} movies
        </div>
        <div className="stat-item">
          ⭐ {movieStats.totalStarRatings.toFixed(2)}
        </div>
        <div className="stat-item">
          ⌛ {movieStats.totalMinutesWatched.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default SummaryStats;
