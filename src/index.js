import './pages/index.css';
import {
  setEventListener,
  settings} from "./components/validate.js";
import {
  addCard,
  createCard,
  grid} from "./components/card.js";  
import {
  openPopup,
  handleCloseButton,
  closePopup,
  closeOverlayClick} from "./components/modal.js";  

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

const popups = document.querySelectorAll('.popup');
const profileOpenButton = document.querySelector('.profile__edit-button');
const cardOpenButton = document.querySelector('.profile__add-button');
const initialCards = [
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },

  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
];

initialCards.forEach(function(element){
  const newCard = createCard(element.name, element.link); 
  addCard(newCard, grid);
});
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
function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(formElement, settings);
  });
};

enableValidation(settings);
closeOverlayClick(popups);
handleCloseButton();

formProfile.addEventListener('submit', handleFormProfileSubmit);
formCardElement.addEventListener('submit', handleFormSubmitCard);
profileOpenButton.addEventListener('click', function(evt) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
  openPopup(profilePopup);
});
cardOpenButton.addEventListener('click', function(evt){
  openPopup(cardPopup);
});