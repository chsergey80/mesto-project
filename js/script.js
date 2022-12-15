
const popupProfile = document.querySelector('.profile__edit-button'); // кнопка редактирования личных данных в profile
const popup = document.querySelector('.popup'); // класс в попап куда вносим и убираем popup_opened для открытия и закрытия попап
const popupButtonClose = document.querySelector('.popup__button-close'); // крестик закрытия popup
const popupProfileTitle = document.querySelector('.popup__text_title'); // поле для ввода имени в popup profile
const pupupPrifileSubtitle = document.querySelector('.popup__text_subtitle');// поле для ввода профессии или рода занятий в popup profile
const profileTitle = document.querySelector('.profile__title'); // текстовое поле в html -> profile с именем
const profileSubtitle = document.querySelector('.profile__subtitle'); // текстовое поле в html -> profile с профессией или родом занятий 
const formElementProfile = document.querySelector('.popup__form_profile'); // форма в popup profile
const cardTemplate = document.querySelector('#templateCard').content; // шаблон карточки
const cardsContainer = document.querySelector('.grid__list') // контенер под карточки 
const newCardButton = document.querySelector('.profile__add-button') // кнопка добавления новой карточки
const popupCardClose = document.querySelector('.popup-card__close') // кнопка - крестик - закрытие попапа новой карточки
const popupCard = document.querySelector('.popup-card') // кнопка - крестик - закрытие попапа новой карточки
const formElementCard = document.querySelector('.popup__form_card'); // форма в popup profile
const inputCardTitle = formElementCard.querySelector('.popup__text_edit_name'); // забирает поле ввода названия места
const inputCardLink = formElementCard.querySelector('.popup__text_edit_link'); // забирает поле ввода ссылки на картинку 
const pictureOpen = document.querySelector('.popup-picture');   // забирает элемент попап открытия изображения
const picture = document.querySelector('.popup-picture__picture');  // забирает элемент в котром хранится изображение места
const pictureClose = document.querySelector('.popup-picture__close'); // кнопка крестик - закрытие попап с изображением
const pictureSubtitle = document.querySelector('.popup-picture__subtitle'); // подпись под картинкой места в попап

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
function dellCard(evt) {
  evt.target.closest('.grid__list-cell').remove();
}

// Функция активирующая и дезактивирующая сердечко (будет переключать сложный селектор)
function signHeart(evt){
  evt.target.classList.toggle('element__button-heart_dark');
}

// Функция открывающая попап с картинкой 
function openPicture(evt) {
  picture.src = evt.target.src;
  picture.alt = evt.target.alt
  pictureSubtitle.textContent = evt.target.alt;
  popupOpen(pictureOpen);

}

// Функция создания карточки (вместе с событиями)

function creteCard(name, link){
  const cardElement = cardTemplate.querySelector('.grid__list-cell').cloneNode(true);
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = name;
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__delet-button').addEventListener('click', dellCard);
  cardElement.querySelector('.element__button-heart').addEventListener('click', signHeart);
  cardElement.querySelector('.element__image').addEventListener('click', openPicture);
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

// Передача в поля Popup prifile данных из html // Насколько я понимаю позже уйдет в submit //
popupProfileTitle.value = profileTitle.textContent;
pupupPrifileSubtitle.value = profileSubtitle.textContent;

// Обработка submit popup profile

function formProfile(evt) {
  evt.preventDefault(); 
  const nameInput = popupProfileTitle.value;
  const jobInput = pupupPrifileSubtitle.value;
  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = jobInput;
  popupClose(popup);
}

formElementProfile.addEventListener('submit', formProfile); 

// Обработка submit popup-card

function formCard(evt) {
  evt.preventDefault(); 
  const newCard = creteCard(inputCardTitle.value, inputCardLink.value);
  addCard(newCard, cardsContainer);
  popupClose(popupCard);
}

formElementCard.addEventListener('submit', formCard); 


// Функция открытия popup //
function popupOpen(popup){
  popup.classList.add('popup_opened');
};

// Функция закрытия popup //
function popupClose(popup) {
  popup.classList.remove('popup_opened');
};

// Открытие popup - редактирование личных данных
popupProfile.addEventListener('click', function(evt){
  popupOpen(popup);
});

// Закрытие popup - редактирование личных данных
popupButtonClose.addEventListener('click', function(evt){
  popupClose(popup);
});

// Открытие popup - новая карточка
newCardButton.addEventListener('click', function(evt){
  popupOpen(popupCard);
});

// Закрытие popup - новая карточка
popupCardClose.addEventListener('click', function(evt){
  popupClose(popupCard);
});

// Открытие popup - картинка
picture.addEventListener('click', function(evt){
  popupOpen(pictureOpen);
});

// Закрытие popup - картинка
pictureClose.addEventListener('click', function(evt){
  popupClose(pictureOpen);
});