import './pages/index.css';
import {
  enableValidation,
  settings} from "./components/validate.js";
import {
  openPopup,
  closePopup,
  closeOverlayClick} from "./components/modal.js";
import {
  handleFormProfileSubmit,
  handleFormSubmitCard,
  handleFormSubmitAvatar,
  formCardElement,
  formProfile,
  formAvatar,
  nameInput,
  jobInput,
  profileTitle,
  profileSubTitle,
  profilePopup,
  cardPopup,
  avatarPopup } from "./components/utils.js";
import {
  createCard,
  grid} from "./components/card.js";
import {
  getUsersData,
  getCards} from "./components/api.js";

const popups = document.querySelectorAll('.popup');
const profileAvatar = document.querySelector('.profile__avatar');
const profileOpenButton = document.querySelector('.profile__edit-button');
const cardOpenButton = document.querySelector('.profile__add-button');
const avatarOpenButton = document.querySelector('.profile__avatar-edit-button');
const buttonsClose = document.querySelectorAll('.popup__close');
const profile = document.querySelector('.profile');


Promise.all([getUsersData(), getCards()])
  .then(([user, cards]) => {
    profileTitle.textContent = user.name;
    profileSubTitle.textContent = user.about;
    profile.id = user._id;
    profileAvatar.src = user.avatar;
    cards.forEach((card) => {
      grid.append(createCard(card, profile))
    });
  })
  .catch((err) => {
    console.log(err); 
  });

getUsersData(); 
enableValidation(settings);
closeOverlayClick(popups);

formProfile.addEventListener('submit', handleFormProfileSubmit);
formCardElement.addEventListener('submit', handleFormSubmitCard);
formAvatar.addEventListener('submit', handleFormSubmitAvatar);
profileOpenButton.addEventListener('click', function(evt) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
  openPopup(profilePopup);
});
cardOpenButton.addEventListener('click', function(evt){
  openPopup(cardPopup);
});
avatarOpenButton.addEventListener('click', function(evt){
  openPopup(avatarPopup);
});
buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');
button.addEventListener('click', () => closePopup(popup));
});

export {
  profile,
  profileAvatar}