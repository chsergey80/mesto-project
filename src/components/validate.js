const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text_type_active'
}; 
function showError(formElement, inputElement, errorMessage, settings) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;    /*2 ревью Исправлено */
  errorElement.classList.add(settings.errorClass);
};
function hideError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = '';
};
function checkInputValid(formElement, inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideError(formElement, inputElement, settings);
  };
};
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}; 
function toggleButtonState(inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass); 
  };
};
function setEventListener(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector)); 
  const buttonElement = formElement.querySelector(settings.submitButtonSelector); 
  toggleButtonState(inputList, buttonElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, settings), 0
    });
  });
};

export { 
  setEventListener,
  settings };