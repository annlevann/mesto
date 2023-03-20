export default class Card {
  constructor(card, templateSelector, openPopupImageAndFill) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._openPopupImageAndFill = openPopupImageAndFill;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element__item')
      .cloneNode(true);

  }

  // Создание карточки:
  generateCard() {
    this._cardElement = this._getTemplate();

    this._cardTitle = this._cardElement.querySelector('.element__title');
    this._image = this._cardElement.querySelector('.element__image');
    this._likeButton = this._cardElement.querySelector('.element__like');
    this._likeButtonImage = this._likeButton.querySelector('img')
    this._deleteButton = this._cardElement.querySelector('.element__delete-button');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners()

    return this._cardElement;
  }


  _handleLikeButton() {
    this._likeButtonImage.classList.toggle('element__like-active');
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });

    this._image.addEventListener('click', () => {
      this._openPopupImageAndFill(this._link, this._name)
    })
  }
}

