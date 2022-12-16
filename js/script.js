const profileOpenButton = document.querySelector('.profile__edit-button'); // кнопка редактирования личных данных в profile
const profilePopup = document.querySelector('.popup-profile'); // поппап редактирования личных данных (открытие / закрытие popup_opened)
const popupButtonCloseProfile = document.querySelector('.popup__button-close_profile'); // крестик закрытия popup
const popupProfileTitle = document.querySelector('.popup__text_title'); // поле для ввода имени в popup profile
const pupupPrifileSubtitle = document.querySelector('.popup__text_subtitle');// поле для ввода профессии или рода занятий в popup profile
const profileTitle = document.querySelector('.profile__title'); // текстовое поле в html -> profile с именем
const profileSubtitle = document.querySelector('.profile__subtitle'); // текстовое поле в html -> profile с профессией или родом занятий 
const profileForm = document.forms['profileEditing'];// форма в popup profile
const cardTemplate = document.querySelector('#templateCard').content; // шаблон карточки
const cardsContainer = document.querySelector('.grid__list') // контенер под карточки 
const newCardButton = document.querySelector('.profile__add-button') // кнопка добавления новой карточки
const popupCardClose = document.querySelector('.popup__button-close_card') // кнопка - крестик - закрытие попапа новой карточки
const popupCard = document.querySelector('.popup-card') // кнопка - крестик - закрытие попапа новой карточки
const cardForm = document.forms['cardEditing'];// форма в popup profile
const inputCardTitle = cardForm.querySelector('.popup__text_edit_name'); // забирает поле ввода названия места
const inputCardLink = cardForm.querySelector('.popup__text_edit_link'); // забирает поле ввода ссылки на картинку 
const pictureOpen = document.querySelector('.popup-picture');   // забирает элемент попап открытия изображения
const picture = document.querySelector('.popup-picture__picture');  // забирает элемент в котром хранится изображение места
const pictureClose = document.querySelector('.popup-picture__close'); // кнопка крестик - закрытие попап с изображением
const pictureSubtitle = document.querySelector('.popup-picture__subtitle'); // подпись под картинкой места в попап
const closeButtons = document.querySelectorAll('.popup__button-close');



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
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
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },

];


// Функция удаления карточки 
function delCard(evt) {
  evt.target.closest('.grid__list-cell').remove();
}

// Функция активирующая и дезактивирующая сердечко (будет переключать сложный селектор)
function toggleLike(evt){
  evt.target.classList.toggle('element__button-heart_dark');
}

// Функция открывающая попап с картинкой 
function openPicture(evt) {
  picture.src = evt.target.src;
  picture.alt = evt.target.alt
  pictureSubtitle.textContent = evt.target.alt;
  openPopup(pictureOpen);

}

// Функция создания карточки (вместе с событиями)

function creteCard(name, link){
  const cardElement = cardTemplate.querySelector('.grid__list-cell').cloneNode(true);
  const pictureCard = cardElement.querySelector('.element__image');
  pictureCard.src = link;
  pictureCard.alt = name;
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__delet-button').addEventListener('click', delCard);
  cardElement.querySelector('.element__button-heart').addEventListener('click', toggleLike);
  pictureCard.addEventListener('click', openPicture);
  return cardElement;
  
}

// Функция создающая первую сетку 
initialCards.forEach(function(item){
  const newCard = creteCard(item.name, item.link);
  addCard(newCard, cardsContainer );
});

// Добавление карточки в сетку // 
function addCard(card, container) {
  container.prepend(card);
} 

// Обработка submit popup profile

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  const nameInput = popupProfileTitle.value;
  const jobInput = pupupPrifileSubtitle.value;
  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = jobInput;
  evt.target.reset();
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', handleProfileFormSubmit); 

// Обработка submit popup-card

function handleCardFormSubmit(evt) {
  evt.preventDefault(); 
  const newCard = creteCard(inputCardTitle.value, inputCardLink.value);
  addCard(newCard, cardsContainer);
  evt.target.reset();
  closePopup(popupCard);
}

cardForm.addEventListener('submit', handleCardFormSubmit); 


// Функция открытия popup //
function openPopup(popup){
  popup.classList.add('popup_opened');
};

// Функция закрытия popup //
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

// Открытие popup - редактирование личных данных
profileOpenButton.addEventListener('click', function(evt){
  popupProfileTitle.value = profileTitle.textContent;
  pupupPrifileSubtitle.value = profileSubtitle.textContent;
  openPopup(profilePopup);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
button.addEventListener('click', () => closePopup(popup));
});

// Открытие popup - новая карточка
newCardButton.addEventListener('click', function(evt){
  openPopup(popupCard);
});

// Открытие popup - картинка
picture.addEventListener('click', function(evt){
  openPopup(pictureOpen);
});

