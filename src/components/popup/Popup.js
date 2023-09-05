import { NavLink } from "react-router-dom";

function Popup({ isOpen, isClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_display-open" : ""}`}>
      <button className="popup__close" onClick={isClose}></button>
      <div className="popup__position">
        <h2 className="popup__text">Главная</h2>
        <NavLink to="/movies" className="popup__textFilm">
          Фильмы
        </NavLink>
        <NavLink href="/saved-movies" className="popup__textSafeFilm">
          Сохраненные фильмы
        </NavLink>
        <NavLink href="/profile" className="popup__accoutd"></NavLink>
      </div>
    </div>
  );
}

export default Popup;
