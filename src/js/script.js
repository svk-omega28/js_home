'use strict';

console.log('---------------- Task 1 start ');
// task 1 start
function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Базовий випадок
  }
  return n * getFactorial(n - 1); // Рекурсивний випадок
}

const userNumber1 = parseInt(prompt('введите число для обчисления факториала:'));
console.log(`факториал числа ${userNumber1} равен  ${getFactorial(userNumber1)}`);
// task 1 end

console.log('---------------- Task 2 start ');
// task 2 start
const label = (num, degree) => {
  if (degree === 0) {
    return 1;
  }
  return num * label(num, degree - 1);
};

const numExponent = parseInt(prompt('Введите число которое нужно возвести в ступень'));
const exponent = parseInt(prompt('Ввведите степень'));

console.log(`${numExponent} в ступени ${exponent} равен ${label(numExponent, exponent)}`);
// task 2 end

console.log('---------------- Task 3 start ');

// task 3 start
function recursiveSum(a, b) {
  if (b === 0) {
    return a;
  }
  return recursiveSum(a + 1, b - 1);
}

const recrusiveNumber1 = parseInt(prompt('введите первое число'));
const recrusiveNumber2 = parseInt(prompt('введите второе число'));
console.log(` сумма чисел ${recrusiveNumber1} u ${recrusiveNumber2} равна ${recursiveSum(recrusiveNumber1, recrusiveNumber2)}`);

// task 3 end
