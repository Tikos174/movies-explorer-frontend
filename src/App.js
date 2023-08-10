import "./index";
import Main from "./components/Main/Main";
import Header from "./components/Header/header";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SavedMovies from './components/SavedMovies/SavedMovies'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
