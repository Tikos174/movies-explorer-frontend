import logo from "../../images/logo_register.svg";

function Register() {
  return (
    <section className="register">
      <div className="register__position">
        <img alt='Логотип сайта' className="register__logo" src={logo} />
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <form className="register__form">
        <p className="register__name">Имя</p>
        <input
          placeholder="Виталий" className="register__input-name"
        />
        <p className="register__name">E-mail</p>
        <input
          input placeholder="dsdsd@bk.ru" type="email" className="register__input-name"
        />
        <p className="register__name">Пароль</p>
        <input
           input type="password" className="register__input-name"
        />
      </form>
      <button className="register__link-login">Зарегистрироваться</button>
      <div className="register__bottom-box">
        <h2 className="register__text-login">Уже зарегистрированы?</h2>
        <a href='/signin' className="register__singin" >Войти</a>
      </div>
    </section>
  );
}

export default Register;
