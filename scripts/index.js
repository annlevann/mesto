const profilePopup = document.querySelector('.profile-popup');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.popup__action');

const userInput = document.querySelector('.popup__input_text_user');
const jobInput = document.querySelector('.popup__input_text_job');
const userInputTitle = document.querySelector('.profile__title');
const jobInputSubtitle = document.querySelector('.profile__subtitle');

// image popup
const imagePopup = document.querySelector('.popup_big-image')
const imagePopupClose = imagePopup.querySelector('.popup__close')
const popupContainerImage = document.querySelector('.popup__container-image')

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const openPopupOld = function() {
  openPopup(profilePopup)

  userInput.value = userInputTitle.textContent;
  jobInput.value = jobInputSubtitle.textContent;
}

function closePopupOld(){
  closePopup(profilePopup)
}


const formSubmit = function(evt) {
  evt.preventDefault();

  userInputTitle.textContent = userInput.value;
  jobInputSubtitle.textContent = jobInput.value;

  closePopup(profilePopup);
}

profileOpenButton.addEventListener('click', openPopupOld);
profileCloseButton.addEventListener('click', closePopupOld);
profileForm.addEventListener('submit', formSubmit);


// new popup
const newPopupElement = document.querySelector('.new-popup');
const newPopupCloseButtonElement = newPopupElement.querySelector('.new-popup__close');
const newPopupOpenButtonElement = document.querySelector('.profile__add-button');
const newPopupSaveButtonElement = newPopupElement.querySelector('.new-popup__save')

const newOpenPopup = function() {
  openPopup(newPopupElement)
}
const newClosePopup = function() {
  closePopup(newPopupElement)
}

const popupAction = document.querySelector('.new-popup__action');
const elementItemName = popupAction.querySelector('.new-popup__input_text_name');
const elementItemLink = popupAction.querySelector('.new-popup__input_text_link');
const elementList = document.querySelector('.element__list');
const elementItemTemplate = document.querySelector('#element-template').content;

const newSavePopup = function(evt) {
  evt.preventDefault();

  const element = {name: elementItemName.value, link: elementItemLink.value}

  elementList.prepend(fillElement(element));

  popupAction.querySelector('.new-popup__input_text_name').value = "";
  popupAction.querySelector('.new-popup__input_text_link').value = "";

  closePopup(newPopupElement)
}



function closeImageModal() {


  closePopup(imagePopup)
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



  const image = cardElement.querySelector('.element__image')

  const openImageModal = (evt) => {
    popupContainerImage.querySelector('.popup__image').src = evt.target.src

    const elementItem = evt.target.closest('.element__item')
    const elementItemTitle = elementItem.querySelector('.element__title')

    popupContainerImage.querySelector('.popup__caption').textContent = elementItemTitle.textContent

    openPopup(imagePopup);
  };

  image.addEventListener('click',openImageModal )

  return cardElement;
};



newPopupOpenButtonElement.addEventListener('click', newOpenPopup);
newPopupCloseButtonElement.addEventListener('click', newClosePopup);
newPopupSaveButtonElement.addEventListener('click', newSavePopup);
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

initialCards.forEach((item) => {
  elementList.append(fillElement(item));
});










