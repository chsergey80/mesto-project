import {
  openPopup } from "./modal.js";

const popupImg = document.querySelector('.popup-images');
const popupPicture = document.querySelector('.popup-image__image');
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
  popupPicture.src = evt.target.src;
  popupPicture.alt = evt.target.alt;
  popupSubtitle.textContent = evt.target.alt;
  openPopup(popupImg);
};
function createCard(name, link){
  const cardElement = gridTemplateCell.querySelector('.grid__list-cell').cloneNode(true); 
  const elementImage = cardElement.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt = name;
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__delet-button').addEventListener('click', removeCard);
  cardElement.querySelector('.element__button-heart').addEventListener('click', markHeart);
  elementImage.addEventListener('click', openImgPopup);
  return cardElement;
};
function addCard(card, box) {
box.prepend(card);
};

export { 
  addCard,
  createCard,
  grid };