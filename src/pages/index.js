import Card from '../components/Card.js';
import FormValidator from "../components/FormValidator.js";

import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

import './index.css';

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

const elementList = document.querySelector('.element__list');

const userInput = document.querySelector('.popup__input_text_user');
const jobInput = document.querySelector('.popup__input_text_job');

const imagePopup = document.querySelector('.popup_big-image');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');

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


const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userJobSelector: '.profile__subtitle'
});

const cardSection = new Section({
    items: initialCards,
    renderer: (card) => {
      cardSection.addItem(createCard(card, '#element-template', openPopupImageAndFill));
    },
  },
  '.element__list');
cardSection.renderItems();

const popupBigImage = new PopupWithImage('.popup_big-image');
popupBigImage.setEventListeners();

// Создаем экземпляр класса редактирования профиля
const popupFormProfile = new PopupWithForm('.profile-popup',
  (inputValues) => {
    userInfo.setUserInfo(inputValues['user'], inputValues['job']);
  });
popupFormProfile.setEventListeners();

// Создаем экземпляр класса добавления карточки
const popupFormAddCard = new PopupWithForm('.new-popup',
  (inputValues) => {
    cardSection.addItem(createCard({
      name: inputValues['name'],
      link: inputValues['link']
    }, '#element-template', openPopupImageAndFill));
  })
popupFormAddCard.setEventListeners();


// Открытие попапа добавления карточек:
const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');
cardPopupOpenButtonElement.addEventListener('click', function () {
  popupFormAddCard.open()
  validatorCards.resetValidationState();
});

// Открытие попапа редактирования профиля
const profileOpenButton = document.querySelector('.profile__edit-button');
profileOpenButton.addEventListener('click', function () {
  popupFormProfile.open();
  const userData = userInfo.getUserInfo()
  userInput.value = userData.name;
  jobInput.value = userData.job;
  validatorProfile.resetValidationState();
});

function openPopupImageAndFill(link, name) {
  popupBigImage.openPopup(link, name)
}

function createCard(card, templateSelector, openPopupImageAndFill) {
  return new Card(card, '#element-template', openPopupImageAndFill).generateCard();
}


