'use strict';

function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let userInput = parseInt(prompt('Введите число от 1 до 10, которое нужно убрать из массива!'), 10);

while (isNaN(userInput) || userInput < 1 || userInput > 10) {
  userInput = parseInt(prompt('Неправильне значення! Введіть число від 1 до 10:'), 10);
}

removeElement(array, userInput);
console.log(array, `Пользователь ввёл число ${userInput}`);
