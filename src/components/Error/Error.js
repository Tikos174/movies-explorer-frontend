function Error() {
  return (
    <section className="error">
        <h2 className="error__title">404</h2>
        <p className="error__name">Страница не найдена</p>
        <a href="/movies" className="error__back">
        Назад
        </a>
    </section>
  );
}

export default Error;