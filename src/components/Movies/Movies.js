import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

import Preloader from "./Preloader/Preloader";

function Movies({ movies, safeMovies, transSafeMovie }) {
  const [addMovies, setAddMovies] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [inputText, setInputText] = React.useState("");
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [сhec, setChec] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

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
      setChec(!сhec);
      handleFilterMovies(inputText, !сhec);
    }
  };

  const handleFilterMovies = (inputValueFilter, Done) => {
    localStorage.setItem("inputValue", JSON.stringify(inputValueFilter));
    localStorage.setItem("switchСheck", JSON.stringify(Done));

    setIsLoading(true);

    setTimeout(() => {
      let newFilteredData = [];

      if (Done) {
        newFilteredData = movies.filter((movie) => {
          return (
            (movie.nameRU
              .toLowerCase()
              .includes(inputValueFilter.toLowerCase()) ||
              movie.nameEN
                .toLowerCase()
                .includes(inputValueFilter.toLowerCase())) &&
            movie.duration <= 1280
          );
        });
        setFilteredMovies(newFilteredData);
        localStorage.setItem("searchedMovies", JSON.stringify(newFilteredData));
      }

      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="searchForm">
      <SearchForm
        procesFilter={handleFilterMovies}
        switching={handleChebox}
        сhec={!сhec}
        handleInput={handleSearchChange}
        inputValueFilter={inputText}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={renderCardsMovies}
          safeMovies={safeMovies}
          transSafeMovie={transSafeMovie}
        />
      )}
        <button onClick={handleAddContent} className="still" type="button">
          Ещё
        </button>
    </section>
  );
}

export default Movies;
