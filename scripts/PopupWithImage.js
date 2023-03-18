import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor( minePopup, popupSelector) {
    super(popupSelector);
    this._manePopup = minePopup;
    this._imagePopupImage = document.querySelector('.popup__image');
    this._imagePopupCaption = document.querySelector('.popup__caption');
  }

  openPopup(link, name) {
    this._imagePopupImage.src = link;
    this._imagePopupImage.alt = name;
    this._imagePopupCaption.textContent = name;
    super.openPopup();
  }
}
