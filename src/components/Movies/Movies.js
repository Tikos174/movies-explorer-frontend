import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Still from "./Still/still";

function Movies() {
  return (
    <>
      <section className="searchForm">
        <SearchForm />
        <MoviesCardList />
        <Still />
      </section>
    </>
  );
}

export default Movies;
