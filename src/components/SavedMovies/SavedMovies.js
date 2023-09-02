import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ safeMovies, transDeleteCardMovie }) {
  const [сhec, setChec] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleChebox = () => {
    if (inputText !== "") {
      setChec(!сhec);
      handleFilterMovies(inputText, !сhec);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterMovies = React.useCallback((inputValueFilter, Done) => {
    localStorage.setItem("inputValueFavorite", JSON.stringify(inputValueFilter));
    localStorage.setItem(
      "checkboxStateFavorite",
      JSON.stringify(Done)
    );

    let newFilteredData = [];

    if (Done) {
      newFilteredData = safeMovies.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(inputValueFilter.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(inputValueFilter.toLowerCase())) &&
          movie.duration <= 40
        );
      });
      setFilteredMovies(newFilteredData);
      localStorage.setItem(
        "localStorageSafeMovie",
        JSON.stringify(newFilteredData)
      );
    } else if (!Done) {
      newFilteredData = safeMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValueFilter.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(inputValueFilter.toLowerCase())
        );
      });
      setFilteredMovies(newFilteredData);
      localStorage.setItem(
        "localStorageSafeMovie",
        JSON.stringify(newFilteredData)
      );
    }
  });

  const searchedMovies = localStorage.getItem("localStorageSafeMovie");
  const localInputValue = localStorage.getItem("inputValueFavorite");
  const localCheckbox = localStorage.getItem("checkboxStateFavorite");

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
    if (localCheckbox) {
      setChec(JSON.parse(localCheckbox));
    }
    if (localInputValue) {
      setInputText(JSON.parse(localInputValue));
      handleFilterMovies(JSON.parse(localInputValue), JSON.parse(localCheckbox));
    }
  }, [searchedMovies, localCheckbox, localInputValue, handleFilterMovies]);

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
        <MoviesCardList
          movies={filteredMovies}
          transDeleteCardMovie={transDeleteCardMovie}
        />
    </>
  );
}

export default SavedMovies;
