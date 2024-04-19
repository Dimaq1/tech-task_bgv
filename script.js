import { form, formField, inputEmail, inputTel } from "./js/constants.js";
import formValidation from "./js/formValidation.js";
import { clearError, clearThanksMessage } from "./js/formValidationHelpers.js";

inputTel.addEventListener('click', clearError)

inputEmail.addEventListener('click', clearError)

formField.forEach(item => clearThanksMessage(item))

form.addEventListener('submit', e => formValidation(e))
