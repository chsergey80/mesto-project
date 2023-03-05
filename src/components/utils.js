import { addCard, createCard, grid } from "./card.js";
import {closePopup} from "./modal.js";

const formCardElement = document.querySelector('.popup-card__form');  // принимает элемент формы из попап Новое место
const inputCardLink = formCardElement.querySelector('.popup-card__text_edit_link'); // принимает поле ссылки на кртинку в попап редактирования карточки //
const inputCardTitle = formCardElement.querySelector('.popup-card__text_edit_title'); // принимает поле название места в попап редактирования карточки //
const formProfile = document.querySelector('.popup-profile__form');  // принимает форму профайла из попап 
const nameInput = formProfile.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени //
const jobInput = formProfile.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий //
const profileTitle = document.querySelector('.profile__title');  // принимает элемент с текстом имени //
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий //
const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-cards');

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup(profilePopup);
  evt.target.reset();
};
function handleFormSubmitCard(evt) {
  evt.preventDefault(); 
  const newCard = createCard(inputCardTitle.value, inputCardLink.value);
  addCard(newCard, grid);
  closePopup(cardPopup);
  evt.target.reset();
};

export {
  handleFormProfileSubmit,
  handleFormSubmitCard, 
  formCardElement,
  formProfile,
  nameInput,
  jobInput,
  profileTitle,
  profileSubTitle,
  profilePopup,
  cardPopup};