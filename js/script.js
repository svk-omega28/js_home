"use strict";


const number1 = parseFloat(prompt('Первое число: '));
const number2 = parseFloat(prompt('Второе число: '));
const operator = prompt('Выбери действие ( +, -, * ,/ ): ');

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


console.log(`${number1} ${operator} ${number2} = ${result}`);