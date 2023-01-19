const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.popup__action');

let userInput = document.querySelector('.popup__input_text_user');
let jobInput = document.querySelector('.popup__input_text_job');
let userInputTitle = document.querySelector('.profile__title');
let jobInputSubtitle = document.querySelector('.profile__subtitle');

const openPopup = function() {
  popupElement.classList.add('popup_opened');

  userInput.value = userInputTitle.textContent;
  jobInput.value = jobInputSubtitle.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
}

const formSubmit = function(evt) {
  evt.preventDefault();

  userInputTitle.textContent = userInput.value;
  jobInputSubtitle.textContent = jobInput.value;

  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmit);
