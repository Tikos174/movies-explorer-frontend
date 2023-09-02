import React from "react";
import logo from "../../images/logo_register.svg";

function Register({handeRegister}) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
    name: "",
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
    handeRegister(formValue);
  };

  return (
    <section className="register">
      <div className="register__position">
        <img alt="Логотип сайта" className="register__logo" src={logo} />
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <form className="register__form" onSubmit={handleSubmit}>
        <p className="register__name">Имя</p>
        <input
          placeholder="Имя"
          className="register__input-name"
          value={formValue.name}
          onChange={handleChange}
          type="name"
          name="name"
        />
        <p className="register__name">E-mail</p>
        <input
          input
          placeholder="Email"
          value={formValue.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
        <p className="register__name">Пароль</p>
        <input
          input
          placeholder="Пароль"
          value={formValue.password}
          onChange={handleChange}
          type="password"
          name="password"
          autoComplete="on"
          className="register__input-name"
        />
        <button className="register__link-login" type="submit">
          Зарегистрироваться
        </button>
      </form>

      <div className="register__bottom-box">
        <h2 className="register__text-login">Уже зарегистрированы?</h2>
        <a href="/signin" className="register__singin">
          Войти
        </a>
      </div>
    </section>
  );
}

export default Register;
