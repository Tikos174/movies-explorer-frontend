import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

import Preloader from "./Preloader/Preloader";

function Movies({ movies, safeMovies, transSafeMovie }) {
  const [addMovies, setAddMovies] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [inputText, setInputText] = React.useState("");
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [сhec, setсhec] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [notSeacthFilm, setnotSeacthFilm] = React.useState(false);

  const handleResize = React.useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const renderCardsMovies = React.useMemo(() => {
    const screenВivision = screenWidth < 1280 ? 4 : 12;

    return filteredMovies.slice(0, screenВivision + addMovies);
  }, [addMovies, screenWidth, filteredMovies]);

  const handleAddContent = () => {
    if (screenWidth < 1280) {
      setAddMovies((prev) => prev + 2);
    } else if (screenWidth >= 1280) {
      setAddMovies((prev) => prev + 3);
    }
  };

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
    localStorage.setItem("inputValue", JSON.stringify(inputValueFilter));
    localStorage.setItem("checkboxState", JSON.stringify(done));

    setnotSeacthFilm(false);
    setIsLoading(true);

    setTimeout(() => {
      let newFilteredData = [];

      if (done) {
        newFilteredData = movies.filter((movie) => {
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
        localStorage.setItem("searchedMovies", JSON.stringify(newFilteredData));
      } else if (!done) {
        newFilteredData = movies.filter((movie) => {
          return (
            movie.nameRU
              .toLowerCase()
              .includes(inputValueFilter.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(inputValueFilter.toLowerCase())
          );
        });
        setFilteredMovies(newFilteredData);
        localStorage.setItem("searchedMovies", JSON.stringify(newFilteredData));
      }

      if (newFilteredData.length === 0) {
        setnotSeacthFilm(true);
      }

      setIsLoading(false);
    }, 2000);
  };

  const searchedMovies = localStorage.getItem("searchedMovies");
  const localInputValue = localStorage.getItem("inputValue");
  const localCheckbox = localStorage.getItem("checkboxState");

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
    if (localCheckbox) {
      setсhec(JSON.parse(localCheckbox));
    }
    if (localInputValue) {
      setInputText(JSON.parse(localInputValue));
    }
  }, [searchedMovies, localCheckbox, localInputValue]);

  return (
    <section className="searchForm">
      <SearchForm
        procesFilter={handleFilterMovies}
        switching={handleChebox}
        сhec={сhec}
        handleInput={handleSearchChange}
        inputValueFilter={inputText}
      />
      {isLoading ? (
        <Preloader />
      ) : notSeacthFilm ? (
        <p className="Movie__notMovie">Ничего не найдено</p>
      ) : (
        <MoviesCardList
          movies={renderCardsMovies}
          safeMovies={safeMovies}
          transSafeMovie={transSafeMovie}
        />
      )}
      {isLoading ? (
        ""
      ) : (
        <button onClick={handleAddContent} className="still" type="button">
          Ещё
        </button>
      )}
    </section>
  );
}

export default Movies;
