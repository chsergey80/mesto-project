function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};
function closeOverlayClick(popup) {
  const popupClick = Array.from(popup);
  popupClick.forEach((popup) => {
    popup.addEventListener('mousedown', function(evt) {
      if (evt.target === popup) {
        closePopup(popup); 
      }
    });
  });
};
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};

export {
  openPopup,
  closePopup,
  closeOverlayClick};