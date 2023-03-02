import { openPopup } from './index.js'

export default class Card {
  constructor(card, elementItemTemplate) {
    this._name = card.name;
    this._link = card.link;
    this._alt = card.name;
    this._elementItemTemplate = elementItemTemplate;
    // this._imagePopupTemplate =
  }

  _getTemplate() {
    return this._elementItemTemplate
      .content
      .cloneNode(true);
  }

  // Создание карточки:
  generateCard(imagePopup) {
    this._cardElement = this._getTemplate();

    const cardTitle = this._cardElement.querySelector('.element__title');
    cardTitle.textContent = this._name;

    const image = this._cardElement.querySelector('.element__image');
    image.src = this._link;
    image.alt = this._name;

    // Создание триггеров для лайков
    const likeButton = this._cardElement.querySelector('.element__like');
    likeButton.addEventListener('click', function(evt){
      evt.target.classList.toggle('element__like-active');
    });

    // Создание триггеров для удаления
  const deleteButton = this._cardElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', function(evt){
    evt.target.closest('.element__item').remove();
  });

    return this._cardElement



    // this._cardTitle = this._cardElement.querySelector('.element__title');
    // this._image = this._cardElement.querySelector('.element__image');
    // this._likeButton = this._cardElement.querySelector('.element__like');
    // this._deleteButton = this._cardElement.querySelector('.element__delete-button');
    //
    // this._cardTitle.textContent = this._name;
    // this._image.alt = this._name;
    // this._image.scr = this._link;
    //
    // this._setEventListeners(imagePopup);
    // return this._cardElement;
  }


  _setEventListeners(imagePopupItem) {
    // this._likeButton.addEventListener('click', function (evt) {
    //   evt.target.classList.toggle('element__like-active');
    // });
    //
    // this._deleteButton.addEventListener('click', function (evt) {
    //   evt.target.closest('.element__item').remove();
    // });
    //
    // this._image.addEventListener('click', function (event) {
    //   openPopup(imagePopupItem);
    //   imagePopup.querySelector()
    //
    //   imagePopupImage.src = this._link;
    //   imagePopupImage.alt = this._name;
    //   imagePopupCaption.textContent = this._name;
    // });
  }

  createElement() {
    // this._setEventListeners();
    // this._getTemplate();
    // this._elementItemTemplate();
    // return this.generateCard;
  }
}










