const chogort = 'plus-cohort-20';
const token = '29600cd5-0570-4443-bea9-c82d8e096704';

const getUsersData = () => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/users/me`, {
  headers: {
    authorization: `${token}`
  },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};

const getCards = () => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/cards `, {
    headers: {
      authorization: `${token}`
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }) 
};

const passProfileDate = (profileTitle, profileSubTitle) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/users/me`, {
    method: 'PATCH',  
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: profileTitle ,
      about: profileSubTitle
    })})
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
};

const passNewCard = (name, link) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/cards`, {
    method: 'POST',  
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name ,
      link: link
    })})
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
};

const delCard = (cardId) => {
    return fetch(`https://nomoreparties.co/v1/${chogort}/cards/${cardId}`, {
    method: 'DELETE',  
    headers: {
      authorization: `${token}`,
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};

const addLike = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/cards/likes/${cardId}`, {
    method: 'PUT',  
    headers: {
      authorization: `${token}`,
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};

const delLike = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/cards/likes/${cardId}`, {
    method: 'DELETE',  
    headers: {
      authorization: `${token}`,
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};

const addAvatar = (avatar) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/users/me/avatar`, {
    method: 'PATCH',  
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })})
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export{
  getUsersData,
  getCards,
  passProfileDate,
  passNewCard,
  delCard,
  addLike,
  delLike,
  addAvatar}