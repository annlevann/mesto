import { openPopup } from './index.js'

export default class Card {
  constructor(card, elementItemTemplate) {
    this._name = card.name;
    this._link = card.name;
    this._elementItemTemplate = elementItemTemplate;
  }

  _getTemplate() {
    return document
      .querySelector('.elementItemTemplate')
      .content
      .querySelector('.element__list')
      .cloneNode(true);

  }

  // Создание карточки:
  generateCard() {
    this._cardElement = this._getTemplate;
    this._cardTitle = this._cardElement.querySelector('.element__title');
    this._image = this._cardElement.querySelector('.element__image');
    this._likeButton = this._cardElement.querySelector('.element__like');
    this._deleteButton = this._cardElement.querySelector('.element__delete-button');

    this._cardTitle.textContent = this._name;
    this._image.alt = this._name;
    this._image.scr = this._link;

    this._setEventListeners();
    return this._cardElement;
  }


  _setEventListeners() {
    this._likeButton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-active');
    });

    this._deleteButton.addEventListener('click', function (evt) {
      evt.target.closest('.element__item').remove();
    });

    this._image.addEventListener('click', function (event) {
      openPopup(imagePopup);
      imagePopupImage.src = this._link;
      imagePopupImage.alt = this._name;
      imagePopupCaption.textContent = this._name;
    });
  }

  createElement() {
    this._setEventListeners();
    this._getTemplate();
    this._elementItemTemplate();
    return this.generateCard;
  }


}










