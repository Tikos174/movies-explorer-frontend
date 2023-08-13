function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__project">О проекте</h2>
      <ul className="aboutProject__position">
        <li className="aboutProject__list">
          Дипломный проект включал 5 этапов
          <p className="aboutProject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="aboutProject__list">
          На выполнение диплома ушло 5 недель
          <p className="aboutProject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="aboutProject__grid">
        <p className="project__week-left">1 неделя</p>
        <p className="project__week-right">4 недели</p>
        <p className="project__weel-text">Back-end</p>
        <p className="project__weel-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
