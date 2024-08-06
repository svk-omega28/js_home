"use strict";

// user name
const userName = prompt("Введите свое имя :");

// number
const number1 = parseFloat(prompt("Введите первое число:"));
const number2 = parseFloat(prompt("Введите второе число:"));
const number3 = parseFloat(prompt("Введите третье число:"));

let sumNumber = (number1 + number2 + number3) / 3;


alert( "Привет " + userName + " ,среднее арифметическое трех чисел: " + sumNumber);
