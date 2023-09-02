const URL = "https://api.nomoreparties.co/beatfilm-movies";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function getAllCards() {
  return fetch(`${URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
}
