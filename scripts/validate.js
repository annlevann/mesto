const validationConfig = {
  formSelector: ".popup__action",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error",
};

function disableSubmit(evt) {
  evt.preventDefault();
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    enableFormValidation(form, config);
  });
}

function enableFormValidation(form, config) {
  form.addEventListener("submit", disableSubmit);
  form.addEventListener("input", () => {
    toggleButton(form, config);
  });
  form.addEventListener("reset", () => {
    setTimeout(() => {
      toggleButton(form, config);
    }, 0);
  });
  addInputListeners(form, config);
  toggleButton(form, config);
}


function handleFormInput(evt, config) {
  const input = evt.target;
  const inputId = input.id;
  const errorElementVisible = document.querySelector(`#${inputId}-error`);
  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorElementVisible.textContent = "";
  } else {
    input.classList.add(config.inputErrorClass);
    errorElementVisible.textContent = input.validationMessage;
  }
}

function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

function addInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach(function(item) {
    item.addEventListener("input", (evt) => {
      handleFormInput(evt, config);
    });
  });
}
enableValidation(validationConfig);
