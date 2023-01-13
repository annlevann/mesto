const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupSaveButtonElement = popupElement.querySelector(".popup__save");

let userInput = document.querySelector('.popup__input_text_user');
let jobInput = document.querySelector('.popup__input_text_job');
let userInputTitle = document.querySelector(".profile__title");
let jobInputSubtitle = document.querySelector(".profile__subtitle");

const openPopup = function() {
    popupElement.classList.add('popup_is-opened');
}

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
}

const handleFormSubmit = function(evt) {
    evt.preventDefault();
    userInputTitle.textContent = userInput.value;
    jobInputSubtitle.textContent = userInput.value;
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('submit', handleFormSubmit);
