function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__container">
          <input className="searchForm__inputBox"></input>
          <button className="searchForm__button"></button>
        </div>
        <input type="checkbox" id="switch" />
        <label for="switch">Toggle</label>
        <h2>Короткометражки</h2>
      </form>
      <ul className="searchForm__film">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="searchForm__container">
          <button className="searchForm__buttonStill">Еще</button>
        </div>
    </section>
  );
}

export default SearchForm;
