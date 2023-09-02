import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  transSafeMovie,
  safeMovies,
  transDeleteCardMovie,
}) {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList">
        {movies.map((card) => {
          return (
            <MoviesCard
            transSafeMovie={transSafeMovie}
            safeMovies={safeMovies}
            transDeleteCardMovie={transDeleteCardMovie}
            movie={card}
            key={card.id || card.movieId}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
