import React  from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({
  movie, safeMovies, transSafeMovie, transDeleteCardMovie
}) {
  const { pathname } = useLocation();

  const imageFilm = movie.image.url
    ? `https://api.nomoreparties.co${movie.image.url}`
    : movie.image;

  function converterTime(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;

    if (minutes > 0) {
      return `${hours}ч${minutes}м`;
    } else {
      return `${hours}ч`;
    }
  }

  const likeIdMovie = safeMovies
    ? safeMovies.find((card) => card.movieId === movie.id)
    : '';

  const statusLike = safeMovies
    ? safeMovies.some((i) => i.movieId === movie.id)
    : false;

  const cardLikeButtonClassName = `moviesCard__button-save ${
    statusLike ? "moviesCard__korometrazhkaButton" : ""
  }`;

  function buttonLikeClick () {
    transSafeMovie(movie, statusLike, likeIdMovie?._id);
  };

  function buttonDeleteClick  () {
    transDeleteCardMovie(movie._id);
  };

  return (
    <li className="moviesCard">
      <img
        alt={movie.nameRU}
        className="moviesCard__card-img"
        src={imageFilm}
      ></img>
      <div className="moviesCard__position">
        <div className="moviesCard__info-text">
          <h2 className="moviesCard__card-text">{movie.nameRU}</h2>
          <p className="moviesCard__card-time">
            {converterTime(movie.duration)}
          </p>
        </div>
        {pathname === "/movies" && (
          <button
            onClick={buttonLikeClick}
            type="button"
            className={cardLikeButtonClassName}
            alt="Сохранить фильм"
          />
        )}
        {pathname === "/saved-movies" && (
          <button
            onClick={buttonDeleteClick}
            type="button"
            className="moviesCard__button-delete"
            alt="Удалить фильм"
          />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
