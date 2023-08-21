import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/signup" &&
      pathname !== "/signin" &&
      pathname !== "/error" ? (
        <footer className="footer">
          <h2 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h2>
          <div className="footer__info">
            <p className="footer__data">&copy;{new Date().getFullYear()}</p>
            <div className="footer__positiin-mobile">
              <a
                target="_blank"
                href="https://practicum.yandex.ru"
                className="footer__githab"
              >
                Яндекс.Практикум
              </a>
              <a
                target="_blank"
                href="https://github.com/Tikos174"
                className="footer__githab"
              >
                Github
              </a>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
}

export default Footer;
