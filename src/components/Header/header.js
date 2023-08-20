import React, {useEffect,useState } from 'react';
import { useLocation } from "react-router-dom";

function Header(props) {

  const [loggenIn, setLoggenIn] = React.useState(false);
  const [loggenInImage, setLoggenInImage] = React.useState(false);

  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setLoggenInImage(true)
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/movies') {
      setLoggenIn(true)
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/saved-movies') {
      setLoggenIn(true)
    }
  }, [pathname]);

  return (
    <header className={`header__position ${loggenInImage ? "header__position-activProfil" : ""}`}>
      <div className='header__actinProfil'>
      <a href='/' className="header__icon"></a>
      <a href="" className={`header__linkfilm ${loggenIn ? "window-open" : ""}`}>
      Фильмы
        </a>
        <a href="" className={`header__linkSaveFilm ${loggenIn ? "window-open" : ""}`}>
        Сохранённые фильмы
        </a>
      </div>
      <div className="header__button">
        <a href="/signup" className={`header__singup ${loggenIn ? "window-hidden" : ""}`}>
          Регистрация
        </a>
        <a href="/signin" className={`header__singin ${loggenIn ? "window-hidden" : ""}`}>
          Войти
        </a>
        <button onClick={props.onEditProfile} className="header__ButtonpopUp"></button>
        <a href="" className={`header__iconAccount ${loggenIn ? "window-open" : ""}`}></a>
      </div>
    </header>
  );
}

export default Header;
