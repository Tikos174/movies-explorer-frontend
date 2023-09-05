import React from "react";
import { useLocation, NavLink } from "react-router-dom";

function Header({loggedIn, onEditProfile}) {
  const { pathname } = useLocation();
  
  return (
    <>

      <header
        className={`header ${
          pathname === '/' ? 'header__positionActivProfil' : ''
        }`}>
        <div className="header__background">
          <div className="header__actinProfil">
            <NavLink to="/" className="header__icon"></NavLink>
            <NavLink
              to="/movies"
              className={`header__linkfilm ${loggedIn ? "window-open" : ""}`}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={`header__linkSaveFilm ${
                loggedIn ? "window-open" : ""
              }`}
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button">
            <NavLink
              to="/signup"
              className={`header__singup ${loggedIn ? "window-hidden" : ""}`}
            >
              Регистрация
            </NavLink>
            <NavLink
              to="/signin"
              className={`header__singin ${loggedIn ? "window-hidden" : ""}`}
            >
              Войти
            </NavLink>
            <button
              onClick={onEditProfile}
              className={`header__buttonpopUp ${
                !loggedIn ? "window-hidden" : ""
              }`}
            ></button>
            <NavLink
              to="/profile"
              className={`header__iconAccount ${loggedIn ? "window-open" : ""}`}
            ></NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
