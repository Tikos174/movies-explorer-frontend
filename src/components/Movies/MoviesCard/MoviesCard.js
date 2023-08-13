import filmOne from "../../../images/3c64b5712a72bf92ff9d7cd3dc557431.jpeg";

function MoviesCard() {
  return (
    <li className="searchForm__cards">
      <img className="searchForm__card-img" src={filmOne}></img>
      <div className="searchForm__position">
        <div className="searchForm__info-text">
          <h2 className="searchForm__card-text">!!!!!!</h2>
          <p className="searchForm__card-time">&&&&&&&</p>
        </div>
        <button className="searchForm__button-save"></button>
      </div>
    </li>
  );
}

export default MoviesCard;
