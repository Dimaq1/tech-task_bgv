import { form, inputEmail, inputTel, phoneRegExp, thankMessage, emailRegExp, telErrorMessageText, emailErrorMessageText, thankMessageText } from "./constants.js";
import { addErrorMessage } from "./formValidationHelpers.js";

export default function formValidation(e) {
  e.preventDefault()

  const telValid = phoneRegExp.test(inputTel.value);
  const emailValid = emailRegExp.test(inputEmail.value);

  if (!telValid || !emailValid) {
    !telValid ? addErrorMessage(inputTel, telErrorMessageText) : null
    !emailValid ? addErrorMessage(inputEmail, emailErrorMessageText) : null
    return false
  }

  thankMessage.innerHTML = thankMessageText
  form.reset()
  return true
}