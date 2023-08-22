import Preloader from "../Preloader/Preloader";

function SearchForm() {
  return (
    <div className="searchForm__form-position">
      <form className="searchForm__form">
        <div className="searchForm__container-seach">
          <input placeholder="Фильм" className="searchForm__inputBox"></input>
          <button className="searchForm__button"></button>
        </div>
        <Preloader />
      </form>
    </div>
  );
}

export default SearchForm;
