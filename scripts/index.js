const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupSaveButtonElement = popupElement.querySelector(".popup__save");

let userInput = document.querySelector('.popup__input_text_user');
let jobInput = document.querySelector('.popup__input_text_job');
let userInputTitle = document.querySelector('.profile__title');
let jobInputSubtitle = document.querySelector('.profile__subtitle');

const openPopup = function() {
  console.log('text');
  console.log('text');
  console.log('text');
  popupElement.classList.add('popup_opened');

  userInput.value = userInputTitle.textContent;
  jobInput.value = jobInputSubtitle.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
}

const SaveButton = function(evt) {
  // evt.preventDefault();

  console.log(userInput.value);
  console.log(jobInput.value);

  userInputTitle.value = userInput.value;
  jobInputSubtitle.value  = jobInput.value;

  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSaveButtonElement.addEventListener('submit', SaveButton);
