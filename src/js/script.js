'use strict';

// part1
console.groupCollapsed('part1');
const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positiveNumbers = array.filter((num) => num > 0);
const sumPositive = positiveNumbers.reduce((sum, num) => sum + num, 0);
const countPositive = positiveNumbers.length;

console.log(`всего  чисел в массиве ${array.length}`);
console.log(`сумма  позитивных чисел: ${sumPositive}`);
console.log(`количество  позитивных чисел ${countPositive}`);
console.groupEnd();

// part2
console.groupCollapsed('part2');
const minElement = Math.min(...array);
const minIndex = array.indexOf(minElement);

console.log(`минимальное число ${minElement} , его номер ${minIndex}`);
console.groupEnd();

// part3
console.groupCollapsed('part3');
const maxElement = Math.max(...array);
const maxIndex = array.indexOf(minElement);

console.log(`максимальное число  ${maxElement} , и  его номер ${maxIndex}`);
console.groupEnd();

// part4
console.groupCollapsed('part4');
const numberNegative = array.filter((num) => num < 0).length;
console.log(`количество негативных чисел ${numberNegative}`);
console.groupEnd();

// part5
console.groupCollapsed('part5');

const numberOnlyPositive = array.filter((num) => num > 0 && num % 2 !== 0).length;
console.log(`количество непарных позитивных чисел ${numberOnlyPositive}`);
console.groupEnd();
// part6
console.groupCollapsed('part6');

const numberOnlyNegative = array.filter((num) => num > 0 && num % 2 === 0).length;
console.log(`количество парных негативных чисел ${numberOnlyNegative}`);
console.groupEnd();

// part 7
console.groupCollapsed('part7');

const sumOnlyPositive = array.filter((num) => num > 0 && num % 2 === 0).reduce((sum, num) => sum + num, 0);
console.log(`сумма только парных позитивных чисел ${sumOnlyPositive}`);
console.groupEnd();

// part 8
console.groupCollapsed('part8');

const sumOnlyNegative = array.filter((num) => num > 0 && num % 2 !== 0).reduce((sum, num) => sum + num, 0);
console.log(`сумма только непарных позитивных чисел ${sumOnlyNegative}`);
console.groupEnd();

// part 9
console.groupCollapsed('part9');

const multiplicationPositive = positiveNumbers.reduce((product, num) => product * num, 1);
console.log(`добуток позитивных чисел ${multiplicationPositive}`);
console.groupEnd();

// part 10
console.groupCollapsed('part10');

const maxArrayNumberOfNull = Math.max(...array);
const newMinArrayNumberOfNull = array.map((num) => (num === maxArrayNumberOfNull ? num : 0));
console.log(`массив везде ноль кроме самого большого числа ${newMinArrayNumberOfNull}`);
console.groupEnd();
