import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit ) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector)
    this._handleFormSubmit = handleFormSubmit;
    this._action = this._popup.querySelector('.popup__action');
    this._inputs = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  closePopup() {
    super.closePopup();
    this._action.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._action.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
    });
  }
}
