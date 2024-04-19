import { thankMessage } from "./constants.js";

export function clearError(e) {
  const input = e.target;
  if (input.classList.contains('error')) {
    input.value = '';
    input.classList.remove('error');
  }
}

export function addErrorMessage(input, message) {
  input.classList.add('error');
  input.value = message;
}

export function clearThanksMessage(item) {
  item.addEventListener('click', () => {
    thankMessage.innerHTML = ''
  })
}