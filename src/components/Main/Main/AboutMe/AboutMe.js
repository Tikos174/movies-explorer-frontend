import photo from '../../../../images/41f074d6f84beab22b93bedc8fe9d3e3.jpeg'

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__student">Студент</h2>
      <div className="aboutMe__position-info">
        <div className="aboutMe__position-text">
          <h3 className="aboutMe__info">Алексей</h3>
        <p className="aboutMe__profession">Фронтенд-разработчик, 30 лет</p>
        <p className="aboutMe__profession-text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a href='https://github.com/Tikos174' className='aboutMe__githab'>Github</a>
        </div>
          <img alt='Моя фотография' className='aboutMe__photo' src={photo}></img>
      </div>
    </section>
  );
}

export default AboutMe;
