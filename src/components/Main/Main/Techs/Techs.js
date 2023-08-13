function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__text">Технологии</h2>
      <div className="techs__list">
        <h3 className="techs__technologies-text">7 технологий</h3>
        <p className="techs__technologies-info">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__technologies-list">
          <li className="techs__technologies-li">HTML</li>
          <li className="techs__technologies-li">CSS</li>
          <li className="techs__technologies-li">JS</li>
          <li className="techs__technologies-li">React</li>
          <li className="techs__technologies-li">Git</li>
          <li className="techs__technologies-li">Express</li>
          <li className="techs__technologies-li">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
