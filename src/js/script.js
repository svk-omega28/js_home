'use strict';

/* // Task 1 Start
const mixArrey = ['Vlad', null, 'Dima', 20, 'Alex', 15, true, 15, 'Saimon'];

function averageOfNumbers(array) {
  let sum = 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sum += array[i];
      total++;
    }
  }

  if (total === 0) {
    return 0;
  }

  return sum / total;
}

console.log(averageOfNumbers(mixArrey));
// Task 1 End */

/* // Task 2 Start
function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    case '%':
      return x % y;
    case '^':
      return x ** y;
    default:
      return 'Неизвестная операция';
  }
}

const x = parseFloat(prompt('Введите первое число:'));
const znak = prompt('Введите знак из перечисленного (+, -, *, /, %, ^):');
const y = parseFloat(prompt('Введите второе число:'));

const result = doMath(x, znak, y);
alert(`Первое число: ${x}\nМатематичний знак: ${znak}\nВторое число: ${y}\nРезультат: ${result}`);
// Task 2 End */

/* // Task 3 Start
function create2DArray() {
  let rows = parseInt(prompt('Введите количество рядок в массиве (не больше 10):'), 10);

  while (isNaN(rows) || rows <= 0 || rows > 10) {
    alert('Введите корректное знаачение рядков (от 1 до 10).');
    rows = parseInt(prompt('Введите количество рядок в массиме (не больше 10):'), 10);
  }

  let columns = parseInt(prompt('Введите количество колонок в каждом ряду (не больше 2):'), 10);

  while (isNaN(columns) || columns <= 0 || columns > 2) {
    alert('Введите корректное знаачение колонок (от 1 до 2)');
    columns = parseInt(prompt('Введите количество колонок в каждом ряду (не больше 2):'), 10);
  }

  const array = [];

  for (let i = 0; i < rows; i++) {
    array[i] = [];

    for (let j = 0; j < columns; j++) {
      array[i][j] = prompt(`Введите значение для элементов:\n\n Номер строки > [${i}] <\n Значение колонки > [${j}] < :`);
    }
  }

  return array;
}

const userArray = create2DArray();
console.log(userArray);
// Task 3 End */

/* // Task 4 Start
function removeCharacters(str, charsToRemove) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (!charsToRemove.includes(currentChar)) {
      result += currentChar;
    }
  }

  return result;
}

const userInput = prompt('Введите строку, с которой нужно убрать символы:');
const charsToRemoveInput = prompt(`Строка которую вы ввели: >>${userInput}<< \nВведите символы для удаления (Пример: "a,B,c"):`);
const charsToRemove = charsToRemoveInput.split(',').map((char) => char.trim());
const cleanedString = removeCharacters(userInput, charsToRemove);

alert(`Рядок который вы ввели: ${userInput}\nСимволи для удаления: ${charsToRemove.join(', ')}\nРядок после удаления символов: ${cleanedString}`);
// Task 4 End */
