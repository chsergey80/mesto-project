import './pages/index.css';
import {
  enableValidation,
  settings} from "./components/validate.js";
import {
  addCard,
  createCard,
  grid} from "./components/card.js";  
import {
  openPopup,
  closePopup,
  closeOverlayClick} from "./components/modal.js";  
import {
  handleFormProfileSubmit,
  handleFormSubmitCard,
  formCardElement,
  formProfile,
  nameInput,
  jobInput,
  profileTitle,
  profileSubTitle,
  profilePopup,
  cardPopup} from "./components/utils.js";

const popups = document.querySelectorAll('.popup');  
const profileOpenButton = document.querySelector('.profile__edit-button');
const cardOpenButton = document.querySelector('.profile__add-button');
const buttonsClose = document.querySelectorAll('.popup__close');
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

enableValidation(settings);

closeOverlayClick(popups);

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

buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});