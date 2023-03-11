import {
  openPopup } from "./modal.js";
import {
  delCard,
  addLike,
  delLike } from "./api.js";

const popupImg = document.querySelector('.popup-images');
const popupImage = document.querySelector('.popup-image__image');
const popupSubtitle = document.querySelector('.popup-image__subtitle'); 
const gridTemplateCell = document.querySelector('#templateCard').content;
const grid = document.querySelector('.grid__list');

function removeCard(evt){
  evt.target.closest('.grid__list-cell').remove();
};
function markHeart(evt){
  evt.target.classList.toggle('element__button-heart_dark');
};
function openImgPopup(evt){
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupSubtitle.textContent = evt.target.alt;
  openPopup(popupImg);
};

function createCard(card, user){
  const cardElement = gridTemplateCell.querySelector('.grid__list-cell').cloneNode(true); 
  const elementImage = cardElement.querySelector('.element__image');
  const buttonDel = cardElement.querySelector('.element__delet-button');
  const buttnHeart = cardElement.querySelector('.element__button-heart');
  const counterLike = cardElement.querySelector('.element__button-heart-count');
  elementImage.src = card.link;
  elementImage.alt = card.name;
  cardElement.querySelector('.element__title').textContent = card.name;
  if (user.id !== card.owner._id){
    buttonDel.classList.add('element__delet-button-inactive');
  };
  buttonDel.addEventListener('click', (evt) => {delCard(card._id)
    .then(() => { removeCard(evt)})
    .catch((err) => {
      console.log(err);
    })
  }
  );
  counterLike.textContent = card.likes.length;
  card.likes.forEach(() => {
    if(card.likes._id === user._id){
      buttnHeart.classList.add('element__button-heart_dark')
    };
  });

  buttnHeart.addEventListener('click', (evt) => {
    if(!evt.target.classList.contains('element__button-heart_dark')){
      addLike(card._id)
      .then((data) => {
        markHeart(evt);
        counterLike.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
    }else{delLike(card._id)
      .then((data) => {
        markHeart(evt);
        counterLike.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
    }
  })
  
  elementImage.addEventListener('click', openImgPopup);
  return cardElement;
};

export {
  createCard,
  grid };