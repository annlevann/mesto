export default class Card {
  constructor(card, elementItemTemplate) {
    this._name = card.name;
    this._link = card.link;
    this._elementItemTemplate = elementItemTemplate;
  }

  _getTemplate() {
    return this._elementItemTemplate
      .content
      .cloneNode(true);
  }

  // Создание карточки:
  generateCard(openPopupImageAndFill) {
    this._cardElement = this._getTemplate();

    const cardTitle = this._cardElement.querySelector('.element__title');
    cardTitle.textContent = this._name;

    const image = this._cardElement.querySelector('.element__image');
    image.src = this._link;
    image.alt = this._name;

    // Создание триггеров для лайков
    const likeButton = this._cardElement.querySelector('.element__like');
    likeButton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-active');
    });

    // Создание триггеров для удаления
    const deleteButton = this._cardElement.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', function (evt) {
      evt.target.closest('.element__item').remove();
    });

    image.addEventListener('click', function (event) {
      openPopupImageAndFill(event.target.src,event.target.alt)
    });

    return this._cardElement
  }
}










