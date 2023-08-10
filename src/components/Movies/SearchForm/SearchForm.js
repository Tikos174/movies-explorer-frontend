import Preloader from '../Preloader/Preloader'

function SearchForm() {
  return (
      <form className="searchForm__form">
        <div className="searchForm__container-seach">
          <input className="searchForm__inputBox"></input>
          <button className="searchForm__button">| {'>'} </button>
        </div>
        <Preloader/>
      </form>
  );
}

export default SearchForm;
