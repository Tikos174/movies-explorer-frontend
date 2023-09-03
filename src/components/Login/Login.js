import logo from "../../images/logo_register.svg";
import React from "react";
import { useForm } from "../../utils/useForm";

function Login({ handeLogin }) {
  const { formValue, handleChange, isValid } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handeLogin({ email: formValue.email, password: formValue.password });
    }
  }

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
          minLength="3"
          maxLength="40"
          required
        />
        <p className="register__name">Пароль</p>
        <input
          placeholder="Пароль"
          type="password"
          name="password"
          minLength="3"
          maxLength="40"
          required
          className="register__input-name"
          value={formValue.password || ""}
          onChange={handleChange}
        />
        <button
          className={`login__fix ${!isValid ? "register__button-disable" : ""}`}
          disabled={!isValid} >
          Войти
        </button>
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
