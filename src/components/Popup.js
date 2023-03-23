export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeByEsc = this._closeByEsc.bind(this);
    this._popupClose = this._popup.querySelector('.popup__close')
  }

  open() {
    document.addEventListener("keydown", this._closeByEsc);
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener("keydown", this._closeByEsc);
    this._popup.classList.remove('popup_opened');
  }

  _closeByEsc(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupClose.addEventListener('click', () => {
      this.close()
    },);

    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
