export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeByEsc = this._closeByEsc.bind(this);
    this._popupClose = this._popup.querySelector('.popup__close')
  }

  openPopup() {
    document.addEventListener("keydown", this._closeByEsc);
    this._popup.classList.add('popup_opened');
  }

  closePopup() {
    document.removeEventListener("keydown", this._closeByEsc);
    this._popup.classList.remove('popup_opened');
  }

  _closeByEsc(event) {
    if (event.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      this.closePopup(openedPopup);
    }
  }

  setEventListeners() {
    this._popupClose.addEventListener('click', () => {
      this.closePopup()
    },);

    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup_opened')) {
        this.closePopup();
      }
    });
  }
}
