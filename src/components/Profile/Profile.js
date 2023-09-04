import React from "react";
import  { useForm }  from "../../utils/useForm";

function Profile({signOut, buttonSafeProfil, userData}) {
  const { formValue, handleChange, errors, isValid } = useForm({
    name: '',
    email: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      buttonSafeProfil({
        name: formValue.name, email: formValue.email
      });
    }
  }

  return (
    <section className="profil">
      <h2 className="profil__info">
      Привет, {formValue.name || userData.name}!
      </h2>
      <form className="profil__form" onSubmit={handleSubmit}>
        <div className="profil__input">
          <p className="profil__name">Имя</p>
          <input
            name="name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            value={formValue.name || userData.name}
            onChange={handleChange}
            className="profil__input-name"
          />
          {isValid ? '' : <span className="register__error">{errors.name}</span>}
        </div>
        <div className="profil__input">
          <p className="profil__name">E-mail</p>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            minLength="3"
            maxLength="40"
            required
            value={formValue.email || userData.email}
            onChange={handleChange}
            className="profil__input-name"
          />
          {isValid ? '' : <span className="register__error">{errors.email}</span>}
        </div>
      </form>
      <div className="profil__box-button">
        <button
          className={`profil__singup ${!isValid ? "register__button-disable" : ""}`}
          type="button"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Редактировать
        </button>
        <button onClick={signOut} className="profil__singout">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
