import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor( popupSelector) {
    super(popupSelector);
    this._imagePopupImage = this._popup.querySelector('.popup__image');
    this._imagePopupCaption = this._popup.querySelector('.popup__caption');
  }

  openPopup(link, name) {
    this._imagePopupImage.src = link;
    this._imagePopupImage.alt = name;
    this._imagePopupCaption.textContent = name;
    super.open();
  }
}
