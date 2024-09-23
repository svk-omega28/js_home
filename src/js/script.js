'use strict';

const sum = () => {
  let total = 0; // начальное число
  return (num) => total += num;
};

const add = sum();

console.log(add(3));
console.log(add(5));
console.log(add(20));
