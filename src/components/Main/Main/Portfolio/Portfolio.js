function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title"> Портфолио</h2>
      <a
        href="https://tikos174.github.io/how-to-learn/"
        className="portfolio__link"
        target="_blank" rel="noreferrer"
      >
        <div className="portfolio__block">
          <h2 className="portfolio__text">Статичный сайт</h2>
          <h2 className="portfolio__icon">↗</h2>
        </div>
      </a>
      <a
        href="https://tikos174.github.io/russian-travel/"
        className="portfolio__link"
        target="_blank" rel="noreferrer"
      >
        <div className="portfolio__block">
          <h2 className="portfolio__text">Адаптивный сайт</h2>
          <h2 className="portfolio__icon">↗</h2>
        </div>
      </a>
      <a
        href="https://tikos174.github.io/mesto/"
        className="portfolio__link"
        target="_blank" rel="noreferrer"
      >
        <div className="portfolio__block">
          <h2 className="portfolio__text">Одностраничное приложение</h2>
          <h2 className="portfolio__icon">↗</h2>
        </div>
      </a>
    </section>
  );
}

export default Portfolio;
