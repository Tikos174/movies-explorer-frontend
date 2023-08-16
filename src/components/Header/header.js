import userEvent from '@testing-library/user-event';
import icom from '../../images/logo.svg'
import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";

function Header() {

  const [loggenIn, setLoggenIn] = React.useState(false);
  const [loggenInImage, setLoggenInImage] = React.useState(false);

  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setLoggenInImage(true)
    }
  }, [pathname]);

  return (
    <header className={`promo__position ${loggenInImage ? "promo__position-activProfil" : ""}`}>
      <div className='promo__actinProfil'>
      <img className="promo__icon" src={icom}></img>
      <a href="" className={`promo__linkfilm ${loggenIn ? "window-hidden" : ""}`}>
      Фильмы
        </a>
        <a href="" className={`promo__linkSaveFilm ${loggenIn ? "window-hidden" : ""}`}>
        Сохранённые фильмы
        </a>
      </div>
      <div className="promo__button">
        <a href="/signup" className="promo__singup">
          Регистрация
        </a>
        <a href="/signin" className="promo__singin">
          Войти
        </a>
        <a href="" className="promo__popUp"></a>
      </div>
    </header>
  );
}

export default Header;
