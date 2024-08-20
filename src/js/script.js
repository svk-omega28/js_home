'use strict';

function padString(str, length, char = ' ', addToLeft = false) {
  if (typeof str !== 'string') {
    return 'Error: The first argument must be a string.';
  }

  if (typeof length !== 'number') {
    return 'Error: The second argument must be a number.';
  }

  if (typeof char !== 'string' || char.length !== 1) {
    return 'Error: The third argument must be a single character string.';
  }

  if (typeof addToLeft !== 'boolean') {
    return 'Error: The fourth argument must be a boolean.';
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

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 6, '*', true));
console.log(padString('hello', 2)); // Виведе: he
