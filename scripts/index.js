const profilePopup = document.querySelector('.profile-popup');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.popup__action');

const userInput = document.querySelector('.popup__input_text_user');
const jobInput = document.querySelector('.popup__input_text_job');
const userInputTitle = document.querySelector('.profile__title');
const jobInputSubtitle = document.querySelector('.profile__subtitle');


// Открытие любого попапа:
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
// Закрытие любого попапа:
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Открытие попапа через кнопку редактирования:
const openPopupProfile = function() {
  openPopup(profilePopup)
  userInput.value = userInputTitle.textContent;
  jobInput.value = jobInputSubtitle.textContent;
}

//Закрытие попапа через крестик:
const closePopupProfile = function() {
  closePopup(profilePopup)
}

// Обработчик «отправки» формы:
const handleProfileFormSubmit = function(evt) {
  evt.preventDefault();
  userInputTitle.textContent = userInput.value;
  jobInputSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}

profileOpenButton.addEventListener('click', openPopupProfile);
profileCloseButton.addEventListener('click', closePopupProfile);
profileForm.addEventListener('submit', handleProfileFormSubmit);


// CARD POPUP:
const cardPopupElement = document.querySelector('.new-popup');
const cardPopupCloseButtonElement = cardPopupElement.querySelector('.new-popup__close');
const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');
const cardPopupSaveButtonElement = cardPopupElement.querySelector('.new-popup__save')

const popupAction = document.querySelector('.new-popup__action');
const elementItemName = popupAction.querySelector('.new-popup__input_text_name');
const elementItemLink = popupAction.querySelector('.new-popup__input_text_link');
const elementList = document.querySelector('.element__list');
const elementItemTemplate = document.querySelector('#element-template');

const imagePopup = document.querySelector('.popup_big-image');
const imagePopupClose = imagePopup.querySelector('.popup__close');
const popupContainerImage = document.querySelector('.popup__container-image');

//Открытие попапа через кнопку добавления:
const openPopupCard = function() {
  openPopup(cardPopupElement)
}

//Закрытие попапа через крестик:
const closePopupCard = function() {
  closePopup(cardPopupElement)
}

//Нажимаем на кнопку "Сохранить":
const handleCardFormSubmit = function(evt) {
  evt.preventDefault();
  const element = createElement(elementItemName.value, elementItemLink.value);
  elementList.prepend(element);
  evt.target.reset();
  closePopup(cardPopupElement);
}


function closeImageModal() {
  closePopup(imagePopup)
}

// Создание карточки:
function createElement(name, link) {
  const cardElement = elementItemTemplate.content.cloneNode(true);
  const cardTitle = cardElement.querySelector('.element__title');
  const image = cardElement.querySelector('.element__image')
  cardTitle.textContent = name;
  image.src = link;
  image.alt = name;

  //Лайк:
  const likeButton = cardElement.querySelector('.element__like');
  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-active');
  });


//Удаление карточки:
  const deleteButton = cardElement.querySelector('.element__delete-button');
  const deleteCard = (evt) => {
    evt.target.closest('.element__item').remove();
  };
  deleteButton.addEventListener('click', deleteCard);


//Открытие большой картинки:
  image.addEventListener('click',function () {
    openPopup(imagePopup);
    popupContainerImage.src = link;
    popupContainerImage.alt = name;
    popupContainerImage.textContent = name;
  });

  return cardElement;
}


cardPopupOpenButtonElement.addEventListener('click', openPopupCard);
cardPopupCloseButtonElement.addEventListener('click', closePopupCard);
cardPopupSaveButtonElement.addEventListener('submit', handleCardFormSubmit);
imagePopupClose.addEventListener('click',closeImageModal)


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

//Добавляем карточки в верстку:
initialCards.forEach(card => {
  const element = createElement(card.name, card.link);
  elementList.append(element);
});










