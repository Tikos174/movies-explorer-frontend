import React from "react";

function SearchForm({
  procesFilter,
  сhec,
  switching,
  handleInput,
  inputValueFilter,
}) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    procesFilter(inputValueFilter, сhec);
  };

  return (
    <div className="searchForm__form-position">
      <form className="searchForm__form" onSubmit={handleSubmit}>
        <div className="searchForm__container-seach">
          <input
            className="searchForm__inputBox"
            type="text"
            placeholder="Фильм"
            name="search"
            value={inputValueFilter || ""}
            onChange={handleInput}
            id="search"
          ></input>
          <button className="searchForm__button" type="submit"></button>
        </div>
        <div className="searchForm__short-films">
          <input
            type="checkbox"
            id="switch"
            onChange={switching}
            checked={сhec || ''}
          />
          <label htmlFor="switch"></label>
          <h2 className="searchForm__switch-block">Короткометражки</h2>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
