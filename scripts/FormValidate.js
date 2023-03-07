export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
  }

  enableValidation() {
    this._addInputListeners();
  }

  _addInputListeners = () => {
    this._inputList.forEach ((item) => {
      item.addEventListener("input", () => {
        this._handleFormInput(item);
        this._toggleButton();
      });
    });
  }

  // Показываем ошибку
  _showInputError(input) {
    input.classList.add(this._config.inputErrorClass);
    const errorElementVisible = document.querySelector(`#${input.id}-error`);
    errorElementVisible.textContent = input.validationMessage;
  }
  // Скрываем ошибку
  _hideInputError (input) {
    input.classList.remove(this._config.inputErrorClass);
    const errorElementVisible = document.querySelector(`#${input.id}-error`);
    errorElementVisible.textContent = "";
  }

  // Добавляем элемент ошибки
  _handleFormInput(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _toggleButton = () => {
    const isFormValid = this._form.checkValidity();
    this._buttonSubmit.disabled = !isFormValid;
    this._buttonSubmit.classList.toggle(this._config.inactiveButtonClass, !isFormValid);
  }
}
