import React from "react";
import { CurrentUserContext } from "./utils/CurrentUserContext";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/header";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Error from "./components/Error/Error";
import ProtectedRoute from "./utils/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import Popup from "./components/popup/Popup";

import { registerPost, authorizationPost, checkToken } from "./utils/auth";
import { getUserInfo, updateUserInfo, getSavedMovies, localStorageSaveMovie, deleteSaveMovie } from "./utils/mainApi";
import { getAllCards } from "./utils/MoviesApi";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [safeMovies, setSafeMovies] = React.useState([]);

  const [userData, setUserData] = React.useState('');
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handle() {
    setIsEditProfilePopupOpen(false);
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      checkToken()
        .then(() => {
          setLoggedIn(true);
          navigate(pathname);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handeRegister (formValue) {
    registerPost(formValue)
      .then(() => {
        handeLogin(formValue);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handeLogin (values) {
    authorizationPost(values.email, values.password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
        getUserInfo()
        .then((data) => {
          setCurrentUser(data);
          setUserData(data.user)
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  React.useEffect(() => {
        getAllCards()
        .then((dataMovie) => {;
          setMovies(dataMovie);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);


  React.useEffect(() => {
        getSavedMovies()
        .then((dataSaveMovie) => {
          setSafeMovies(dataSaveMovie);
          localStorage.setItem('localStorageSaveMovie', JSON.stringify(dataSaveMovie));
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  function handleUpdateName (data) {
    updateUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handeSafeMovie (movie, statusLike, id) {
    if (statusLike) {
      transDeleteSaveMovie(id);
    } else {
      localStorageSaveMovie(movie)
        .then((data) => {
          setSafeMovies([...safeMovies, data]);
        })
        .catch((err) => {
          console.log(err);
        });
      }
  };
  

  function transDeleteSaveMovie (id)  {
    deleteSaveMovie(id)
      .then(() => {
        setSafeMovies(safeMovies.filter((m) => m._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const localSafeMovies = localStorage.getItem('localStorageSaveMovie');

  React.useEffect(() => {
    if (localSafeMovies) {
      setSafeMovies(JSON.parse(localSafeMovies));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('localStorageSaveMovie');
    localStorage.removeItem('inputValue');
    localStorage.removeItem('switchСheck');
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('inputValueFavorite');
    localStorage.removeItem('checkboxStateFavorite');
    navigate('/', { replace: true });
    setLoggedIn(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <main className="main">
          {
          pathname === "/" ||
          pathname === "/movies" ||
          pathname === "/saved-movies" ||
          pathname === "/profile" ? (
            <Header onEditProfile={handleEditProfileClick} loggedIn={loggedIn}/>
          ) : null}
          <main className="main">
            <Routes>
              <Route
                path="/signup"
                element={
                  <Register
                    handeRegister={handeRegister} loggedIn={!loggedIn}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <Login
                    handeLogin={handeLogin}
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  movies={movies}
                  safeMovies={safeMovies}
                  transSafeMovie={handeSafeMovie}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  transDeleteCardMovie={transDeleteSaveMovie}
                  safeMovies={safeMovies}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                  element={Profile}
                  signOut={handleSignOut}
                  buttonSafeProfil={handleUpdateName}
                  transUpdateName={handleUpdateName}
                  loggedIn={loggedIn}
                  userData={userData}
                  />
                }
              />
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Error loggedIn={loggedIn} />} />
            </Routes>
          </main>
            <Footer />
        </main>
        <Popup isOpen={isEditProfilePopupOpen} isClose={handle} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
