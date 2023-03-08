import Card from './Card.js';
import FormValidator from "./FormValidate.js";


const elementItemTemplate = document.querySelector('#element-template');
const elementList = document.querySelector('.element__list');

const userInput = document.querySelector('.popup__input_text_user');
const jobInput = document.querySelector('.popup__input_text_job');
const userInputTitle = document.querySelector('.profile__title');
const jobInputSubtitle = document.querySelector('.profile__subtitle');

const profilePopup = document.querySelector('.profile-popup');
const imagePopup = document.querySelector('.popup_big-image');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');

// CARD POPUP:
const popupAction = document.querySelector('.new-popup__action');
const elementItemName = popupAction.querySelector('.new-popup__input_text_name');
const elementItemLink = popupAction.querySelector('.new-popup__input_text_link');

const formValidatorProfile = document.querySelector('#popup_one')


const validationConfig = {
  formSelector: ".popup__action",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error",
};

const validatorProfile = new FormValidator(validationConfig, formValidatorProfile);
validatorProfile.enableValidation();

const validatorCards = new FormValidator(validationConfig, popupAction);
validatorCards.enableValidation();

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
  }
];

const openPopupImageAndFill = function (link,name){
  openPopup(imagePopup);
  imagePopupImage.src = link;
  imagePopupImage.alt = name;
  imagePopupCaption.textContent = name;
}

function createCard (card, templateSelector, openPopupImageAndFill) {
  return new Card(card, elementItemTemplate,openPopupImageAndFill).generateCard();
}

// Проходимся в цикле по массиву с карточками и добавляем их в верстку
initialCards.forEach(function (card){
  elementList.append(createCard(card, elementItemTemplate,openPopupImageAndFill));
})

// Открытие любого попапа
export function openPopup(popup) {
  document.addEventListener("keydown", closeByEsc);
  popup.classList.add('popup_opened');
}

// Закрытие любого попапа
function closePopup(popup) {
  document.removeEventListener("keydown", closeByEsc);
  popup.classList.remove('popup_opened');
}

// Закрытие попапа нажатием на Esc
function closeByEsc(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

 // Проходимся в цикле по попапом и добавляем для них overlay
const popups = Array.from(document.querySelectorAll('.popup'));
popups.forEach(function (popupElement){
  popupElement.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(event.target);
    }
  })
})

// Открытие окна редактирования профиля
const profileOpenButton = document.querySelector('.profile__edit-button');
profileOpenButton.addEventListener('click', function (){
  openPopup(profilePopup)
  userInput.value = userInputTitle.textContent;
  jobInput.value = jobInputSubtitle.textContent;
  validatorProfile.validateWhenOpen();
});

// закрыть редактирование профиля
const profileCloseButton = profilePopup.querySelector('.popup__close');
profileCloseButton.addEventListener('click', function(){
  closePopup(profilePopup)
});


// Сохранение нового профиля
const profileForm = document.querySelector('.popup__action');
profileForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  userInputTitle.textContent = userInput.value;
  jobInputSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
});

// Закрыть попап с картинкой
const imagePopupClose = imagePopup.querySelector('.popup__close');
imagePopupClose.addEventListener('click',function (){
  closePopup(imagePopup)
})

// Открытие попапа через кнопку добавления:
const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');
cardPopupOpenButtonElement.addEventListener('click', function (){
  openPopup(cardPopupElement);
  validatorCards.validateWhenOpen();
});


// Закрытие попапа через крестик:
const cardPopupElement = document.querySelector('.new-popup');
const cardPopupCloseButtonElement = cardPopupElement.querySelector('.new-popup__close');
cardPopupCloseButtonElement.addEventListener('click', function (){
  closePopup(cardPopupElement)
});


// Нажимаем на кнопку "Сохранить" при добавлении новой карточки
const cardPopupFormElement = cardPopupElement.querySelector('.popup__action')
cardPopupFormElement.addEventListener('submit', function (evt){
  evt.preventDefault();

  const cardContainer = {
    "name":elementItemName.value,
    "link":elementItemLink.value
  }

  elementList.prepend(createCard(cardContainer, elementItemTemplate,openPopupImageAndFill));
  evt.target.reset();

  closePopup(cardPopupElement);
});



