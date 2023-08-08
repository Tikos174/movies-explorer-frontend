function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__project">О проекте</h2>
      <li className="aboutProject__position">
        <ul className="aboutProject__list">
          Дипломный проект включал 5 этапов
          <p>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </ul>
        <ul className="aboutProject__list">
          На выполнение диплома ушло 5 недель
          <p>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </ul>
      </li>
      <div className="aboutProject__grid">
        <p className="project__week-left">1 неделя</p>
        <p className="project__week-right">4 недели</p>
        <p>Back-end</p>
        <p>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
