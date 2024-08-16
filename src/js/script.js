'use strict';

// Task #1 Start
console.group('Task #1');
let result = '';
for (let i = 10; i <= 20; i++) {
  result += i + (i < 20 ? ', ' : '');
}
console.log(result);
console.groupEnd();
// Task #1 End

// Task #2 Start
console.group('Task #2');
for (let i = 10; i <= 20; i++) {
  console.log(i * i);
}
console.groupEnd();
// Task #2 End

// Task #3 Start
console.group('Task #3');
for (let i = 1; i <= 10; i++) {
  console.log(i * 7);
}
console.groupEnd();
// Task #3 End

// Task #4 Start
console.group('Task #4');
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);
console.groupEnd();
// Task #4 End

// Task #5 Start
console.group('Task #5');
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
console.log(product);
console.groupEnd();
// Task #5 End

// Task #6 Start
console.group('Task #6');
let sum6 = 0;
for (let i = 1; i <= 500; i++) {
  sum6 += i;
}
const average = sum6 / 500;
console.log(average);
console.groupEnd();
// Task #6 End

// Task #7 Start
console.group('Task #7');
let sum7 = 0;
for (let i = 30; i <= 80; i += 2) {
  sum7 += i;
}
console.log(sum);
console.groupEnd();
// Task #7 End

// Task #8 Start
console.group('Task #8');
for (let i = 102; i <= 200; i += 3) {
  console.log(i);
}
console.groupEnd();
// Task #8 End

// Task #9 Start
console.group('Task #9');
const number = parseInt(prompt('Введите число:'), 10);
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
console.groupEnd();
// Task #9 End

// Task #10 Start
console.group('Task #10');
let count = 5;
for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    count++;
  }
}
console.log(count);
console.groupEnd();
// Task #10 End

// Task #11 Start
console.group('Task #11');
let sum11 = 5;
for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    sum11 += i;
  }
}
console.log(sum11);
console.groupEnd();
// Task #11 End

// Task #12 Start
console.group('Task #12');
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log('=============');
}
console.groupEnd();
// Task #12 End
