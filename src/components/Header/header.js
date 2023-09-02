import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";

function Header({onEditProfile, loggedIn}) {
  const [loggenIn, setLoggenIn] = React.useState(false);
  const [loggenInImage, setLoggenInImage] = React.useState(false);
  
  
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setLoggenInImage(true);
    }
  }, []);

  useEffect(() => {
    if (pathname === "/movies") {
      setLoggenIn(true);
      setLoggenInImage(false);
    }
  }, []);

  useEffect(() => {
    if (pathname === "/saved-movies") {
      setLoggenIn(true);
      setLoggenInImage(false);
    }
  }, []);

  useEffect(() => {
    if (pathname === "/profile") {
      setLoggenIn(true);
      setLoggenInImage(false);
    }
  }, []);

  return (
    <>
        <header
          className={`header ${
            loggenInImage ? "header__positionActivProfil" : ""
          }`}
        >
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
                className={`header__iconAccount ${
                  loggedIn ? "window-open" : ""
                }`}
              ></a>
            </div>
          </div>
        </header>
        </>
  );
}

export default Header;
