export const validationConfig = {
  formSelector: ".popup__action",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error",
};

export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;

  }


  enableValidation(config) {
    this._formList = Array.from(document.querySelectorAll(config.formSelector));
    this._formList.forEach((form) => {
      this._enableFormValidation(form, config);
    });
  }

  _enableFormValidation(form, config) {
    this._form.addEventListener("submit", this._disableSubmit);
    this._form.addEventListener("input", () => {
      this._toggleButton(this._form, config);
    });
    this._form.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButton(this._form, config);
      }, 0);
    });
    this._addInputListeners(this._form, config);
    this._toggleButton(this._form, config);

    this._disableSubmit = (evt) => {
      evt.preventDefault();
    }
  }

  _handleFormInput = (evt, config) => {
    this._input = evt.target;
    this._inputId = this._input.id;
    this._errorElementVisible = document.querySelector(`#${this._inputId}-error`);
    if (this._input.validity.valid) {
      this._input.classList.remove(config.inputErrorClass);
      this._errorElementVisible.textContent = "";
    } else {
      this._input.classList.add(config.inputErrorClass);
      this._errorElementVisible.textContent = this._input.validationMessage;
    }
  }

  _toggleButton = (form, config) => {
    this._buttonSubmit = form.querySelector(config.submitButtonSelector);
    this._isFormValid = form.checkValidity();
    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(config.inactiveButtonClass, !this._isFormValid);
  }

  _addInputListeners = (form, config) => {
    this._inputList = Array.from(form.querySelectorAll(this._config.inputSelector));
    this._inputList.forEach ((item) => {
      item.addEventListener("input", (evt) => {
        this._handleFormInput(evt, config);
      });
    });
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
