import {
  checkResponse
} from "./utils";

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-20',
  headers: {
    authorization: '29600cd5-0570-4443-bea9-c82d8e096704',
    'Content-Type': 'application/json',
  },
};

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const getUsersData = () => {
  return request(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
};

const getCards = () => {
  return request(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
};

const passProfileDate = (profileTitle, profileSubTitle) => {
  return request(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileTitle,
      about: profileSubTitle
    })
  })
}

const passNewCard = (name, link) => {
  return request(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
};

const delCard = (cardId) => {
  return request(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
};

const addLike = (cardId) => {
  return request(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
};

const delLike = (cardId) => {
  return request(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
};

const addAvatar = (avatar) => {
  return request(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
};

export{
  getUsersData,
  getCards,
  passProfileDate,
  passNewCard,
  delCard,
  addLike,
  delLike,
  addAvatar}