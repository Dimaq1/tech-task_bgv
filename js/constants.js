export const form = document.querySelector('.form');
export const formField = document.querySelectorAll('.form__field');
export const inputTel = document.querySelector('#tel');
export const inputEmail = document.querySelector('#email');
export const thankMessage = document.querySelector('.thank-message');

export const telErrorMessageText = 'Невірний формат номеру';
export const emailErrorMessageText = 'Невірний формат пошти';
export const thankMessageText = 'Дякуємо, дані відправлені';


export const phoneRegExp = /^\+\d{1,3}\d{7,15}$/;
export const emailRegExp = /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/i;