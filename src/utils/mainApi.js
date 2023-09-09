// const URL = "http://localhost:3001";
const URL = "https://api.movie.resource.nomoredomains.sbs";


export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function getUserInfo() {
  return fetch(`${URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => checkResponse(res));
}

export function updateUserInfo(data) {
  return fetch(`${URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => checkResponse(res));
}

export function getSavedMovies() {
  return fetch(`${URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => checkResponse(res));
}

export function localStorageSaveMovie(movie) {
  return fetch(`${URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/beatfilm-movies${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then((res) => checkResponse(res));
}

export function deleteSaveMovie(_id) {
  return fetch(`${URL}/movies/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => checkResponse(res));
}