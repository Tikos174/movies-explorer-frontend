function Footer () {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <p>{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer