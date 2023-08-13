import logo from "../../images/logo_register.svg";

function Register() {
  return (
    <section className="register">
      <div className="">
        <img className="register__logo" src={logo} alt="Movies Explorer" />
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <form className="register__form">
        <p className="register__name">Имя</p>
        <input
          className="register__input-name"
        />
        <p className="register__name">E-mail</p>
        <input
          className="register__input-name"
        />
        <p className="register__name">Пароль</p>
        <input
          className="register__input-name"
        />
      </form>
      <button className="register__link-login">Зарегистрироваться</button>
      <div className="register__bottom-box">
        <h2 className="register__text-login">Уже зарегистрированы?</h2>
        <a href='' className="register__singin" >Войти</a>
      </div>
    </section>
  );
}

export default Register;
