import filmOne from "../../../images/3c64b5712a72bf92ff9d7cd3dc557431.jpeg";
import React from "react";

function MoviesCard() {
  const [korometrazhkaButton, setkorometrazhkaButton] = React.useState(false);

  const cardLikeButtonClassName = `searchForm__button-save ${
    korometrazhkaButton ? "searchForm__korometrazhkaButton" : ""
  }`;

  function handleSafeFilm() {
    if (cardLikeButtonClassName) {
      setkorometrazhkaButton(true);
    }
  }

  return (
    <li className="searchForm__cards">
      <img className="searchForm__card-img" src={filmOne}></img>
      <div className="searchForm__position">
        <div className="searchForm__info-text">
          <h2 className="searchForm__card-text">!!!!!!</h2>
          <p className="searchForm__card-time">&&&&&&&</p>
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
