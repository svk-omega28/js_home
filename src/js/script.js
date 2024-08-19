// eslint-disable-next-line no-plusplus

'use strict';

// Task #1 Start
console.groupCollapsed('Task #1');
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}
console.groupEnd();
// Task #1 End

// Task #2 Start
console.groupCollapsed('Task #2');
const priceDollar = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
  console.log(`${dollars} dollars = ${dollars * priceDollar} UAH`);
}
console.groupEnd();
// Task #2 End

// Task #3 Start
console.groupCollapsed('Task #3');
const N = parseInt(prompt('Введите сюда ваше число "Таск 3": '), 10);

for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    console.log(i);
  } else {
    break;
  }
}
console.groupEnd();
// Task #3 End

// Task #4 Start
console.groupCollapsed('Task #4');
const number = parseInt(prompt('Введите сюда ваше число "Таск 4"'), 10);
let isPrime = true;
if (number > 1) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
} else {
  isPrime = false;
}

if (isPrime) {
  console.log(`${number} is prime number`);
} else {
  console.log(`${number} is not prime number`);
}
console.groupEnd();
// Task #4 End

// Task #5 Start
console.groupCollapsed('Task #5');
const numberTask5 = parseInt(prompt('Введите ваше число Таск 5: '), 10);

let isPowerOfThree = false;
for (let i = 0; 3 ** i <= numberTask5; i++) {
  if (3 ** i === numberTask5) {
    isPowerOfThree = true;
    break;
  }
}

if (isPowerOfThree) {
  console.log(`${numberTask5} можно получить возведя в 3 степень`);
} else {
  console.log(`${numberTask5} нельзя получить возведя в 3 степень`);
}

console.groupEnd();
// Task #5 End
