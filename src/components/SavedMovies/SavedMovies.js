import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ safeMovies, transDeleteCardMovie }) {
  const [сhec, setсhec] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [notSeacthFilm, setnotSeacthFilm] = React.useState(false);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleChebox = () => {
    if (inputText !== "") {
      setсhec(!сhec);
      handleFilterMovies(inputText, !сhec);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterMovies = (inputValueFilter, done) => {
    localStorage.setItem(
      "inputValueFavorite",
      JSON.stringify(inputValueFilter)
    );
    localStorage.setItem("checkboxStateFavorite", JSON.stringify(done));

    let newFilteredData = [];

    if (done) {
      newFilteredData = safeMovies.filter((movie) => {
        return (
          (movie.nameRU
            .toLowerCase()
            .includes(inputValueFilter.toLowerCase()) ||
            movie.nameEN
              .toLowerCase()
              .includes(inputValueFilter.toLowerCase())) &&
          movie.duration <= 40
        );
      });
      setFilteredMovies(newFilteredData);
      localStorage.setItem(
        "localStorageSafeMovieFavorite",
        JSON.stringify(newFilteredData)
      );
    } else if (!done) {
      newFilteredData = safeMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValueFilter.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(inputValueFilter.toLowerCase())
        );
      });
      setFilteredMovies(newFilteredData);
      localStorage.setItem(
        "localStorageSafeMovieFavorite",
        JSON.stringify(newFilteredData)
      );
    }

    if (newFilteredData.length === 0) {
      setnotSeacthFilm(true);
    }
  };

  const searchedMovies = localStorage.getItem("localStorageSafeMovieFavorite");
  const localInputValue = localStorage.getItem("inputValueFavorite");
  const localCheckbox = localStorage.getItem("checkboxStateFavorite");

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
    if (localCheckbox) {
      setсhec(JSON.parse(localCheckbox));
    }
    if (localInputValue) {
      setInputText(JSON.parse(localInputValue));
      handleFilterMovies(
        JSON.parse(localInputValue),
        JSON.parse(localCheckbox)
      );
    }
  }, [searchedMovies, localCheckbox, localInputValue]);

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    } else {
      setFilteredMovies(safeMovies);
    }
  }, [searchedMovies, safeMovies]);
  return (
    <>
      <SearchForm
        switching={handleChebox}
        сhec={сhec}
        handleInput={handleSearchChange}
        inputValueFilter={inputText}
        procesFilter={handleFilterMovies}
      />
      {filteredMovies.length ? (
        <MoviesCardList
          movies={filteredMovies}
          transDeleteCardMovie={transDeleteCardMovie}
        />
      ) : (
        <p className="Movie__notMovie">Ничего не найдено</p>
      )}
    </>
  );
}

export default SavedMovies;
