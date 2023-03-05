export default class Card {
  constructor(card, templateSelector, openPopupImageAndFill) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._openPopupImageAndFill = openPopupImageAndFill;
  }

  _getTemplate() {
    return this._templateSelector
      .content
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


  // const cardTitle = this._cardElement.querySelector('.element__title');
  // cardTitle.textContent = this._name;
  //
  // const image = this._cardElement.querySelector('.element__image');
  // image.src = this._link;
  // image.alt = this._name;
  //
  // // Создание триггеров для лайков
  // const likeButton = this._cardElement.querySelector('.element__like');
  // likeButton.addEventListener('click', function (evt) {
  //   evt.target.classList.toggle('element__like-active');
  // });
  //
  // // Создание триггеров для удаления
  // const deleteButton = this._cardElement.querySelector('.element__delete-button');
  // deleteButton.addEventListener('click', function (evt) {
  //   evt.target.closest('.element__item').remove();
  // });
  //
  // image.addEventListener('click', function (event) {
  //   openPopupImageAndFill(event.target.src,event.target.alt)
  // });

  //   return this._cardElement
  // }
// }

  _handleLikeButton() {
    this._likeButtonImage.classList.toggle('element__like-active');
  }

  _handleDeleteButton() {
    this._deleteButton.closest('.element__item').remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });

    this._image.addEventListener('click', (event) => {
      this._openPopupImageAndFill(event.target.src, event.target.alt)
    })
  }
}

