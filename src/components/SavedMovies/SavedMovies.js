import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ safeMovies, transDeleteCardMovie }) {
  const [сhec, setсhec] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [notSeacthFilm, setnotSeacthFilm] = React.useState(false);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleChebox = () => {    
      setсhec(!сhec);
      handleFilterMovies(inputText, !сhec);
  };

  const handleFilterMovies = (inputValueFilter, isCheckedState) => {
    localStorage.setItem(
      "inputValFavorite",
      JSON.stringify(inputValueFilter)
    );
    localStorage.setItem("checkboxStateFavorite", JSON.stringify(isCheckedState));

    let newFilteredData = [];

    if (isCheckedState) {
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
        "searchedMoviesFavorite",
        JSON.stringify(newFilteredData)
      );
    } else if (!isCheckedState) {
      newFilteredData = safeMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValueFilter.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(inputValueFilter.toLowerCase())
        );
      });
      setFilteredMovies(newFilteredData);
      localStorage.setItem(
        "searchedMoviesFavorite",
        JSON.stringify(newFilteredData)
      );
    }

    if (newFilteredData.length === 0) {
      setnotSeacthFilm(true);
    }
  };

  // const searchedMovies = localStorage.getItem('searchedMoviesFavorite');
  // const localCheckbox = localStorage.getItem('checkboxStateFavorite');

  // React.useEffect(() => {
  //   if (searchedMovies) {
  //     setFilteredMovies(JSON.parse(searchedMovies));
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchedMovies, localCheckbox]);

  React.useEffect(() => {
      setFilteredMovies(safeMovies);
  }, [safeMovies]);

  return (
    <>
      <SearchForm
        switching={handleChebox}
        сhec={сhec}
        handleInput={handleSearchChange}
        inputValueFilter={inputText}
        procesFilter={handleFilterMovies}
      />
          <section className="moviesCardList">
      {filteredMovies.length ? (
        <MoviesCardList
          movies={filteredMovies}
          transDeleteCardMovie={transDeleteCardMovie}
        />
      ) : (
        notSeacthFilm && (
        <p className="Movie__notMovie">Ничего не найдено</p>
        )
      )}
      </section>
    </>
  );
}

export default SavedMovies;
