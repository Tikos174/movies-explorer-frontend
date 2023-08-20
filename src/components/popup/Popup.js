function Popup({ isOpen, isClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_display-open" : ""}`}>
      <button className="popup__close" onClick={isClose}></button>
      <div className="popup__position">
        <h2 className="popup__text">Главная</h2>
        <a href='/movies' className="popup__textFilm">Фильмы</a>
        <a href='/saved-movies' className="popup__textSafeFilm">Сохраненные фильмы</a>
      </div>
      <a href='/profile' className="popup__accoutd"></a>
    </div>
  );
}

export default Popup;
