export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;

  }

  enableValidation() {
    this._formList = Array.from(document.querySelectorAll(this._config.formSelector));
    this._formList.forEach((form) => {
      this._enableFormValidation(form);
    });
  }

  _enableFormValidation(form, config) {
    this._form.addEventListener("submit", this._disableSubmit);
    this._form.addEventListener("input", () => {
    });
    this._form.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButton();
      }, 0);
    });
    this._addInputListeners(this._form, config);
    this._toggleButton(this._form, config);

    this._disableSubmit = (evt) => {
      evt.preventDefault();
    }
  }

  _handleFormInput = (evt) => {
    this._input = evt.target;
    this._inputId = this._input.id;
    this._errorElementVisible = document.querySelector(`#${this._inputId}-error`);
    if (this._input.validity.valid) {
      this._input.classList.remove(this._config.inputErrorClass);
      this._errorElementVisible.textContent = "";
    } else {
      this._input.classList.add(this._config.inputErrorClass);
      this._errorElementVisible.textContent = this._input.validationMessage;
    }
  }

  _toggleButton = () => {
    const buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
    const isFormValid = this._form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(this._config.inactiveButtonClass, !isFormValid);
  }

  _addInputListeners = () => {
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._inputList.forEach ((item) => {
      item.addEventListener("input", (evt) => {
        this._handleFormInput(evt);
        this._toggleButton();
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
