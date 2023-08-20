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
      <a href='/' className="promo__icon"></a>
      <a href="" className={`promo__linkfilm ${loggenIn ? "window-open" : ""}`}>
      Фильмы
        </a>
        <a href="" className={`promo__linkSaveFilm ${loggenIn ? "window-open" : ""}`}>
        Сохранённые фильмы
        </a>
      </div>
      <div className="promo__button">
        <a href="/signup" className={`promo__singup ${loggenIn ? "window-hidden" : ""}`}>
          Регистрация
        </a>
        <a href="/signin" className={`promo__singin ${loggenIn ? "window-hidden" : ""}`}>
          Войти
        </a>
        <a href="" className="promo__popUp"></a>
        <a href="" className={`promo__iconAccount ${loggenIn ? "window-open" : ""}`}></a>
      </div>
    </header>
  );
}

export default Header;
