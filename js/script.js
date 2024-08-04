"use strict";

/* Task #1 Start */

const name = prompt("Введіть ваше ім'я:");
const age = prompt("Введіть ваш вік:");
const likesProgramming = confirm("Чи подобається вам програмувати?");

/* Task #1 End */

/* Task #2 Start */

console.log(name);
console.log(age);
console.log(likesProgramming);

console.log("Тип змінної 'name':", typeof name);
console.log("Тип змінної 'age':", typeof age);
console.log("Тип змінної 'likesProgramming':", typeof likesProgramming);

/* Task #2 End */

/* Task #3 Start */

const greeting = `Привіт, ${name}!`;
alert(greeting);

/* Task #3 End */

/* Task #4 Start */

const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);

/* Task #4 End */

/* Task #5 Start */

const isAdult = numericAge >= 18;
console.log(isAdult);

/* Task #5 End */
