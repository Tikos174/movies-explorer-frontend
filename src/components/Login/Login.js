import logo from "../../images/logo_register.svg";

function Login() {
  return (
    <section className="login">
      <div className="register__position">
        <img className="login__logo" src={logo} alt="Movies Explorer" />
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form className="register__form">
        <p className="register__name">E-mail</p>
        <input type="email" placeholder="Email" className="register__input-name" />
        <p className="register__name">Пароль</p>
        <input placeholder="password" type="password" className="register__input-name" />
      </form>
      <button className="register__link-login login__fix">Войти</button>
      <div className="register__bottom-box">
        <h2 className="register__text-login">Ещё не зарегистрированы?</h2>
        <a href="/signup" className="register__singin">
        Регистрация
        </a>
      </div>
    </section>
  );
}

export default Login;
