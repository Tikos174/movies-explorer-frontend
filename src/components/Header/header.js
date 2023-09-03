import React from "react";
import { useLocation, Link } from "react-router-dom";

function Header({loggedIn, onEditProfile}) {
  const { pathname } = useLocation();

    const [loggenInImage, setLoggenInImage] = React.useState(false);

  return (
    <>

      <header
        className={`header ${
          pathname === '/' ? 'header__positionActivProfil' : ''
        }`}>
        <div className="header__background">
          <div className="header__actinProfil">
            <a href="/" className="header__icon"></a>
            <a
              href="/movies"
              className={`header__linkfilm ${loggedIn ? "window-open" : ""}`}
            >
              Фильмы
            </a>
            <a
              href="/saved-movies"
              className={`header__linkSaveFilm ${
                loggedIn ? "window-open" : ""
              }`}
            >
              Сохранённые фильмы
            </a>
          </div>
          <div className="header__button">
            <a
              href="/signup"
              className={`header__singup ${loggedIn ? "window-hidden" : ""}`}
            >
              Регистрация
            </a>
            <a
              href="/signin"
              className={`header__singin ${loggedIn ? "window-hidden" : ""}`}
            >
              Войти
            </a>
            <button
              onClick={onEditProfile}
              className={`header__buttonpopUp ${
                loggenInImage ? "window-hidden" : ""
              }`}
            ></button>
            <a
              href="/profile"
              className={`header__iconAccount ${loggedIn ? "window-open" : ""}`}
            ></a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
