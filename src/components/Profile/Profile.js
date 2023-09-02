import React, { useContext } from "react";
import { CurrentUserContext } from "../../utils/CurrentUserContext";

function Profile({signOut, buttonSafeProfil}) {

  const currentUser = useContext(CurrentUserContext);
  
  const [formValue, setFormValue] = React.useState({
    email: "",
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
    buttonSafeProfil(formValue);
  }; 

  return (
    <section className="profil">
      <h2 className="profil__info">
      Привет, {}!
      </h2>
      <form className="profil__form" onSubmit={handleSubmit}>
        <div className="profil__input">
          <p className="profil__name">Имя</p>
          <input
            name="name"
            type="text"
            placeholder="Имя"
            required
            value={formValue.name}
            onChange={handleChange}
            className="profil__input-name"
          />
        </div>
        <div className="profil__input">
          <p className="profil__name">E-mail</p>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            required
            value={formValue.email}
            onChange={handleChange}
            className="profil__input-name"
          />
        </div>
      </form>
      <div className="profil__box-button">
        <button
          className="profil__singup"
          type="button"
          onClick={handleSubmit}
        >
          Редактировать
        </button>
        <button onClick={signOut} className="profil__singout">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
