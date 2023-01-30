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





// new popup
const newPopupElement = document.querySelector('.new-popup');
const newPopupCloseButtonElement = newPopupElement.querySelector('.new-popup__close');
const newPopupOpenButtonElement = document.querySelector('.profile__add-button');
const newPopupSaveButtonElement = newPopupElement.querySelector('.new-popup__save')

const newOpenPopup = function() {
  newPopupElement.classList.add('new-popup_opened');
}
const newClosePopup = function() {
  newPopupElement.classList.remove('new-popup_opened');
}

let popupAction = document.querySelector('.new-popup__action');
let elementItemName = popupAction.querySelector('.new-popup__input_text_name');
let elementItemLink = popupAction.querySelector('.new-popup__input_text_link');
let elementList = document.querySelector('.element__list');
let elementItemTemplate = document.querySelector('#element-template').content;

const newSavePopup = function(evt) {
  evt.preventDefault();

  let element = {name: elementItemName.value, link: elementItemLink.value}

  elementList.prepend(fillElement(element));

  popupAction.querySelector('.new-popup__input_text_name').value = "";
  popupAction.querySelector('.new-popup__input_text_link').value = "";

  newPopupElement.classList.remove('new-popup_opened');
}

const fillElement = (element) => {
  const cardElement = elementItemTemplate.cloneNode(true);
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__image').alt = element.alt;

  const likeButton = cardElement.querySelector('.element__like');
  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-active');
  });


  const deleteButton = cardElement.querySelector('.element__delete-button');
  const deleteCard = (evt) => {
    evt.target.closest('.element__item').remove();
  };
  deleteButton.addEventListener('click', deleteCard);

  return cardElement;
};


newPopupOpenButtonElement.addEventListener('click', newOpenPopup);
newPopupCloseButtonElement.addEventListener('click', newClosePopup);
newPopupSaveButtonElement.addEventListener('click', newSavePopup);

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

initialCards.forEach((item) => {
  elementList.append(fillElement(item));
});








