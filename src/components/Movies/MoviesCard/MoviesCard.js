import filmOne from "../../../images/3c64b5712a72bf92ff9d7cd3dc557431.jpeg";

import { useEffect, useState, useLocation } from "react";

function MoviesCard() {  
  const [korometrazhkaButton, setkorometrazhkaButton] = useState(false);

  const cardLikeButtonClassName = `moviesCard__button-save ${
    korometrazhkaButton ? "moviesCard__korometrazhkaButton" : ""
  }`;

  function handleSafeFilm() {
    if (cardLikeButtonClassName) {
      setkorometrazhkaButton(true);
    }
  }

  return (
    <li className="moviesCard">
      <img
        alt="Картика фильма"
        className="moviesCard__card-img"
        src={filmOne}
      ></img>
      <div className="moviesCard__position">
        <div className="moviesCard__info-text">
          <h2 className="moviesCard__card-text">!!!!!!</h2>
          <p className="moviesCard__card-time">&&&&&&&</p>
        </div>
        <button
          onClick={handleSafeFilm}
          className={cardLikeButtonClassName}
        ></button>
      </div>
    </li>
  );
}

export default MoviesCard;
