function Profile() {

  

  return (
    <section className="profil">
      <h2 className="profil__info">Привет, Виталий!</h2>
      <form className="profil__form">
        <div className="profil__input">
          <p className="profil__name">Имя</p>
          <input placeholder="Виталий" className="profil__input-name" />
        </div>
        <div className="profil__input">
          <p className="profil__name">E-mail</p>
          <input placeholder="deruad@bk.ru" className="profil__input-name" />
        </div>
      </form>
      <div className="profil__box-button">
        <button className="profil__singup">
          Редактировать
        </button>
        <button className="profil__singout">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
