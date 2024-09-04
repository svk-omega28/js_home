'use strict';

const createArray = () => {
  const length = parseInt(prompt('укажите длинну масива:'));

  const array = [];

  for (let i = 0; i < length; i++) {
    const element = prompt(`данные для элемента ${i}:`);
    array.push(element);
  }

  document.write(`начальный массив: ${array.join(', ')}<br>`);

  array.sort((a, b) => a - b);
  document.write(`после сортировки: ${array.join(', ')}<br>`);

  array.splice(1, 3);
  document.write(`массив после удаления элементов с 2 по 4 (включительно): ${array.join(', ')}<br>`);
};

createArray();
