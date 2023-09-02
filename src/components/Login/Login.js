import logo from "../../images/logo_register.svg";
import React from "react";

function Login({handeLogin}) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handeLogin(formValue);
  };

  return (
    <section className="login">
      <div className="register__position">
        <img alt="Логотип сайта" className="login__logo" src={logo} />
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form className="register__form" onSubmit={handleSubmit}>
        <p className="register__name">E-mail</p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          className="register__input-name"
        />
        <p className="register__name">Пароль</p>
        <input
          placeholder="Пароль"
          type="password"
          name="password"
          autoComplete="on"
          className="register__input-name"
          value={formValue.password}
          onChange={handleChange}
        />
        <button className="register__link-login login__fix">Войти</button>
      </form>

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
