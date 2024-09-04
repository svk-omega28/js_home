'use strict';

// start 1

const exponentiation = (number, factor) => {
  const result = number ** factor;
  alert(`Результат: ${number} в степени ${factor} равно ${result}`);
};

const mainFunction = (callback) => {
  const number = parseFloat(prompt('Введите ваше число'));
  const factor = parseFloat(prompt('Введите степени'));

  callback(number, factor);
};

mainFunction(exponentiation);

// start 2

/* const multiplay = (num1, num2) => {
  const result = num1 * num2;

  alert(`results: ${num1} * ${num2} = ${result}`);
};

const mainFunction = (callback) => {
  const num1 = parseFloat(prompt('say number one'));
  const num2 = parseFloat(prompt('say number two'));

  callback(num1, num2);
};

mainFunction(multiplay); */

// start 3

/* const division = (num1, num2) => {
  const result = num1 / num2;

  alert(`results: ${num1} / ${num2} = ${result}`);
};

const mainFunction = (callback) => {
  const num1 = parseFloat(prompt('say number one'));
  const num2 = parseFloat(prompt('say number two'));

  callback(num1, num2);
};

mainFunction(division); */

// start 4

/* const modulo = (num1, num2) => {
  const result = num1 % num2;

  alert(`results: ${num1} % ${num2} = ${result}`);
};

const mainFunction = (callback) => {
  const num1 = parseFloat(prompt('say number one'));
  const num2 = parseFloat(prompt('say number two'));

  callback(num1, num2);
};

mainFunction(modulo); */
