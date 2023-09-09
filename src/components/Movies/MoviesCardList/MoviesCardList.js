import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  transSafeMovie,
  safeMovies,
  transDeleteCardMovie,
}) {
  return (
      <ul className="moviesCardList">
        {movies.map((item) => {
          return (
            <MoviesCard
            transSafeMovie={transSafeMovie}
            safeMovies={safeMovies}
            transDeleteCardMovie={transDeleteCardMovie}
            movie={item}
            key={item.id || item.movieId}
            />
          );
        })}
      </ul>
  );
}

export default MoviesCardList;
