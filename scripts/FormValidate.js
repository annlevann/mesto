export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
  }

  enableValidation() {
    this._addInputListeners();
    // this._formList = Array.from(document.querySelectorAll(this._config.formSelector));
    // this._formList.forEach((form) => {
    //   this._enableFormValidation(form);
    // });
  }

  _addInputListeners = () => {
    // this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._inputList.forEach ((item) => {
      item.addEventListener("input", () => {
        this._handleFormInput(item);
        this._toggleButton();
      });
    });
  }


  // Показываем ошибку
  _showInputError(input) {
    // this._form.addEventListener("submit", this._disableSubmit);
    // this._form.addEventListener("input", () => {
    // });
    // this._form.addEventListener("reset", () => {
    //   setTimeout(() => {
    //     this._toggleButton();
    //   }, 0);
    // });
    // this._addInputListeners(this._form, config);
    // this._toggleButton(this._form, config);
    //
    // this._disableSubmit = (evt) => {
    //   evt.preventDefault();
    // }

    this._input = input;
    this._errorElementVisible = document.querySelector(`#${this._input.id}-error`);
    this._input.classList.add(this._config.inputErrorClass);
    this._errorElementVisible.textContent = this._input.validationMessage;
  }
  // Скрываем ошибку
  _hideInputError (input) {
    this._errorElementVisible = document.querySelector(`#${this._input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    this._errorElementVisible.textContent = "";
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
    // const buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
    const isFormValid = this._form.checkValidity();
    this._buttonSubmit.disabled = !isFormValid;
    this._buttonSubmit.classList.toggle(this._config.inactiveButtonClass, !isFormValid);
  }

}


// function disableSubmit(evt) {
//   evt.preventDefault();
// }
//
// function enableValidation(config) {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((form) => {
//     enableFormValidation(form, config);
//   });
// }
//
// function enableFormValidation(form, config) {
//   form.addEventListener("submit", disableSubmit);
//   form.addEventListener("input", () => {
//     toggleButton(form, config);
//   });
//   form.addEventListener("reset", () => {
//     setTimeout(() => {
//       toggleButton(form, config);
//     }, 0);
//   });
//   addInputListeners(form, config);
//   toggleButton(form, config);
// }
//
//
// function handleFormInput(evt, config) {
//   const input = evt.target;
//   const inputId = input.id;
//   const errorElementVisible = document.querySelector(`#${inputId}-error`);
//   if (input.validity.valid) {
//     input.classList.remove(config.inputErrorClass);
//     errorElementVisible.textContent = "";
//   } else {
//     input.classList.add(config.inputErrorClass);
//     errorElementVisible.textContent = input.validationMessage;
//   }
// }
//
// function toggleButton(form, config) {
//   const buttonSubmit = form.querySelector(config.submitButtonSelector);
//   const isFormValid = form.checkValidity();
//   buttonSubmit.disabled = !isFormValid;
//   buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
// }
//
// function addInputListeners(form, config) {
//   const inputList = Array.from(form.querySelectorAll(config.inputSelector));
//   inputList.forEach(function(item) {
//     item.addEventListener("input", (evt) => {
//       handleFormInput(evt, config);
//     });
//   });
// }
// enableValidation(validationConfig);
