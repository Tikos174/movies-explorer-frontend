function Footer () {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__info">
                <p className="footer__data">&copy;{new Date().getFullYear()}</p>
                <div className="footer__positiin-mobile">
                <a href='' className='footer__githab'>Яндекс.Практикум</a>
                <a href='' className='footer__githab'>Github</a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer