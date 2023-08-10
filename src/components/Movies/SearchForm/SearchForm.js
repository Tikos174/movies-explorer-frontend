import filmOne from '../../../images/3c64b5712a72bf92ff9d7cd3dc557431.jpeg'
import filmTwo from '../../../images/41f074d6f84beab22b93bedc8fe9d3e3.jpeg'

function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__container-seach">
          <input className="searchForm__inputBox"></input>
          <button className="searchForm__button"></button>
        </div>
        <div className="searchForm__short-films">
          <input type="checkbox" id="switch" />
          <label for="switch"></label>
          <h2 className="searchForm__switch-block">Короткометражки</h2>
        </div>
      </form>
      <ul className="searchForm__film">
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmOne}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmTwo}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmTwo}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmTwo}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmOne}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmOne}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmOne}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmOne}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmOne}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmOne}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
        <li className='searchForm__cards'>
          <img className='searchForm__card-img' src={filmOne}></img>
          <h2 className='searchForm__card-text'>!!!!!!</h2>
          <p className='searchForm__card-time'>&&&&&&&</p>
        </li>
      </ul>
      <div className="searchForm__container">
        <button className="searchForm__buttonStill">Еще</button>
      </div>
    </section>
  );
}

export default SearchForm;
