import Card from '../components/Card.js';
import FormValidator from "../components/FormValidate.js";

import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const elementList = document.querySelector('.element__list');

const profilePopup = document.querySelector('.profile-popup');
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

const bigImage = new PopupWithImage('.popup_big-image');
bigImage.setEventListeners();

// Создаем экземпляр класса редактирования профиля
const popupFormProfile = new PopupWithForm('.profile-popup',
  (input) => {
    userInfo.setUserInfo(input['user'], input['job']);
  });
popupFormProfile.setEventListeners();

// Создаем экземпляр класса добавления карточки
const popupFormAddCard = new PopupWithForm('.new-popup',
  (input) => {
    cardSection.addItem(createCard({
      name: input['name'],
      link: input['link']
    }, '#element-template', openPopupImageAndFill));
  })
popupFormAddCard.setEventListeners();


// Открытие попапа добавления карточек:
const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');
cardPopupOpenButtonElement.addEventListener('click', function () {
  popupAddCard.openPopup();
  validatorCards.validateWhenOpen();
});

// Открытие попапа редактирования профиля
const profileOpenButton = document.querySelector('.profile__edit-button');
profileOpenButton.addEventListener('click', function () {
  popup.openPopup();
  const userData = userInfo.getUserInfo()
  userInput.value = userData.name;
  jobInput.value = userData.job;
  validatorProfile.validateWhenOpen();
});

function openPopupImageAndFill(link, name) {
  bigImage.openPopup(link, name)
}

function createCard(card, templateSelector, openPopupImageAndFill) {
  return new Card(card, '#element-template', openPopupImageAndFill).generateCard();
}

const popup = new Popup('.profile-popup')
popup.setEventListeners();

const popupAddCard = new Popup('.new-popup')
popupAddCard.setEventListeners();


// Закрыть попап с большой картинкой
const imagePopupClose = imagePopup.querySelector('.popup__close');
imagePopupClose.addEventListener('click', function () {
  bigImage.closePopup();
})

// // Сохранение нового профиля
// const profileForm = document.querySelector('.popup__action');
// profileForm.addEventListener('submit', function (evt) {
//   evt.preventDefault();
//   userInputTitle.textContent = userInput.value;
//   jobInputSubtitle.textContent = jobInput.value;
//   popup.closePopup();
// });

// Нажимаем на кнопку "Сохранить" при добавлении новой карточки
// const cardPopupFormElement = cardPopupElement.querySelector('.popup__action')
// cardPopupFormElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
//
//   const cardContainer = {
//     "name": elementItemName.value,
//     "link": elementItemLink.value
//   }
//
//   elementList.prepend(createCard(cardContainer, '#element-template', openPopupImageAndFill));
//   evt.target.reset();
//
//   closePopup(cardPopupElement);
// });


// // Открытие любого попапа
// export function openPopup(popup) {
//   document.addEventListener("keydown", closeByEsc);
//   popup.classList.add('popup_opened');
// }
//
// // Закрытие любого попапа
// function closePopup(popup) {
//   document.removeEventListener("keydown", closeByEsc);
//   popup.classList.remove('popup_opened');
// }
//
// // Закрытие попапа нажатием на Esc
// function closeByEsc(event) {
//   if (event.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// // закрыть редактирование профиля
// const profileCloseButton = profilePopup.querySelector('.popup__close');
// profileCloseButton.addEventListener('click', function () {
//   closePopup(profilePopup)
// });

// Закрытие попапа через крестик:
// const cardPopupElement = document.querySelector('.new-popup');
// const cardPopupCloseButtonElement = cardPopupElement.querySelector('.new-popup__close');
// cardPopupCloseButtonElement.addEventListener('click', function () {
//   closePopup(cardPopupElement)
// });

// Проходимся в цикле по попапом и добавляем для них overlay
// const popups = Array.from(document.querySelectorAll('.popup'));
// popups.forEach(function (popupElement) {
//   popupElement.addEventListener('mousedown', (event) => {
//     if (event.target.classList.contains('popup_opened')) {
//       closePopup(event.target);
//     }
//   })
// })


