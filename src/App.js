import "./index";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SavedMovies from './components/SavedMovies/SavedMovies'
import Error from "./components/Error/Error";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="app">
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
  );
}

export default App;
