import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Still from "./Still/still";
import Header from "../Header/header";
import Footer from "../Footer/Footer";

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
