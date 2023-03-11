import { 
  createCard, 
  grid } from "./card.js";
import {
  closePopup} from "./modal.js";
import { 
  passProfileDate, 
  passNewCard, 
  addAvatar } from "./api.js";
import {
  profile, 
  profileAvatar} from "../index.js"

const formCardElement = document.querySelector('.popup-card__form');
const formAvatar = document.querySelector('.popup-avatar__form');
const inputCardLink = formCardElement.querySelector('.popup-card__text_edit_link');
const inputCardTitle = formCardElement.querySelector('.popup-card__text_edit_title');
const inputAvatarLink = formAvatar.querySelector('.popup-avatar__text_edit_link');
const formProfile = document.querySelector('.popup-profile__form');
const nameInput = formProfile.querySelector('.popup__text_edit_name');
const jobInput = formProfile.querySelector('.popup__text_edit_career');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-cards');
const avatarPopup = document.querySelector('.popup-avatar');
const buttonSumitProfile = document.querySelector('.popup-profile__button');
const buttonSumitCard = document.querySelector('.popup-card__button');
const buttonSumitAvatar = document.querySelector('.popup-avatar__button');

const  renderLoading = (isLoading, button) => {
  if(isLoading){
    button.textContent = 'Сохранение...';
  }else{
    button.textContent = 'Сохранить';
  };
};

function handleFormProfileSubmit(evt) {
  evt.preventDefault(); 
  renderLoading(true, buttonSumitProfile);
  passProfileDate(nameInput.value, jobInput.value)
  .then((res) => {
    profileTitle.textContent = res.name;
    profileSubTitle.textContent = res.about;
    closePopup(profilePopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, buttonSumitProfile);
  })
  evt.target.reset();
};
 
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  renderLoading(true, buttonSumitCard);
  passNewCard(inputCardTitle.value, inputCardLink.value)
  .then((card) => {
    grid.prepend(createCard(card, profile));
    closePopup(cardPopup)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, buttonSumitCard);
  }); 
  evt.target.reset();
};

function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, buttonSumitAvatar);
  addAvatar(inputAvatarLink.value)
  .then((res) => {
    profileAvatar.src = res.avatar;
    closePopup(avatarPopup)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, buttonSumitAvatar);
  }); 
  evt.target.reset();
};

export {
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
  avatarPopup,
  inputAvatarLink};