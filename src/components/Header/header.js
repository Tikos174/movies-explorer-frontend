import icom from '../../images/logo.svg'

function Header() {
  return (
    <header className="promo__position">
      <img className="promo__icon" src={icom}></img>
      <div className="promo__button">
        <a href="/signup" className="promo__singup">
          Регистрация
        </a>
        <a href="/signin" className="promo__singin">
          Войти
        </a>
      </div>
    </header>
  );
}

export default Header;
