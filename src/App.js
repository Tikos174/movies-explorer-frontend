import "./index";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SavedMovies from './components/SavedMovies/SavedMovies'
import Error from "./components/Error/Error";
import Popup from "./components/popup/Popup";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
  useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handle() {
    setIsEditProfilePopupOpen(false);
  }

  return (
    <div className="app">
      < Header  onEditProfile={handleEditProfileClick}/>
      <main className="main">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      </main>
      <Footer />
      <Popup isOpen={isEditProfilePopupOpen} isClose={handle}/>
    </div>
  );
}

export default App;
