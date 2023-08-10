import logo from "../../images/logo_register.svg";

function Login() {
  return (
    <section className="login">
      <div>
        <img className="register__logo" src={logo} alt="Movies Explorer" />
        <h2 className="register__title">Рады видеть!</h2>
      </div>
      <form className="register__form">
        <p className="register__name">E-mail</p>
        <input className="register__input-name" />
        <p className="register__name">Пароль</p>
        <input className="register__input-name" />
      </form>
      <button className="register__link-login">Зарегистрироваться</button>
      <div className="register__bottom-box">
        <h2 className="register__text-login">Ещё не зарегистрированы?</h2>
        <a href="" className="register__singin">
        Регистрация
        </a>
      </div>
    </section>
  );
}

export default Login;
