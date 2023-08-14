import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/header";

function SavedMovies() {
  return (
    <>
    < Header />
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default SavedMovies;
