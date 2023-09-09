// const URL = "http://localhost:3001";
const URL = "https://api.movie.resource.nomoredomains.sbs";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function registerPost(name, email, password) {
  return fetch(`${URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(name, email, password),
  }).then((res) => checkResponse(res));
}

export function authorizationPost(email, password) {
  return fetch(`${URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    });
}

export function checkToken(token) {
  return fetch(`${URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => checkResponse(res))
    .then((data) => data);
}
