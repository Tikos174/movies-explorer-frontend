import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <section className="searchForm">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default Movies;
