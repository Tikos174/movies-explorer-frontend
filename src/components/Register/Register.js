import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../images/logo_register.svg";
import  { useForm }  from "../../utils/useForm";

function Register({ handeRegister, loggedIn }) {
  const navigate = useNavigate();
  const { formValue, handleChange, errors, isValid } = useForm({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handeRegister({
        name: formValue.name, email: formValue.email, password: formValue.password 
      });
    }
    if (loggedIn) {
      navigate("/movies");
    }
  }

  React.useEffect(() => {
    if (!loggedIn) {
      navigate('/movies');
    }
  }, [loggedIn, navigate]);

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
          value={formValue.name || ''}
          onChange={handleChange}
          type="name"
          name="name"
          minLength="3"
          maxLength="40"
          required
        />
        <span className="register__error">{errors.name}</span>
        <p className="register__name">E-mail</p>
        <input
        className="register__input-name"
          input
          placeholder="Email"
          value={formValue.email || ''}
          onChange={handleChange}
          type="email"
          name="email"
          minLength="3"
          maxLength="40"
          required
        />
        <span className="register__error">{errors.email}</span>
        <p className="register__name">Пароль</p>
        <input
          input
          placeholder="Пароль"
          value={formValue.password || ''}
          onChange={handleChange}
          type="password"
          name="password"
          autocomplete="on"
          className="register__input-name"            
          minLength="6"
          maxLength="20"
          required
        />
        <span className="register__error">{errors.password}</span>
        <button
          className={`register__link-login ${!isValid ? "register__button-disable" : ""}`}
          disabled={!isValid} >
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
