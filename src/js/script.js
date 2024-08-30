'use strict';

const userName = prompt('Как вас зовут?');

function padString(str, length, char = ' ', addToLeft = false) {
  if (typeof str !== 'string') {
    return 'Должна быть строка';
  }

  if (typeof length !== 'number') {
    return 'Должно быть число';
  }

  if (typeof char !== 'string' || char.length !== 1) {
    return 'Должна быть строка из одного символа';
  }

  if (typeof addToLeft !== 'boolean') {
    return 'Должен быть boolean';
  }

  if (str.length >= length) {
    return str.substring(0, length);
  }

  const paddingLength = length - str.length;
  const padding = char.repeat(paddingLength);

  if (addToLeft) {
    return padding + str;
  }
  return str + padding;
}

console.log(`${userName}, ваш результат: ${padString('hello', 8, '*')}`);
console.log(`${userName}, ваш результат: ${padString('hello', 6, '*', false)}`);
console.log(`${userName}, ваш результат: ${padString('hello', 6, '*', true)}`);
console.log(`${userName}, ваш результат: ${padString('hello', 2)}`); 
