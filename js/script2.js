"use strict";
// user name
function getLetters(promptMessage) {
    let input;
    const letterPattern = /^[a-zA-Z]+$/;

    while (true) {
        input = prompt(promptMessage);
        if (input === null) {
            // Возвращаем null, чтобы сигнализировать о завершении
            return null;
        }
        if (letterPattern.test(input)) {
            return input;
        } else {
            alert("Можно вводить только латиницу!");
            promptMessage = "Неправильный ввод. Нужно вводить на латинице:";
        }
    }
}

const userName = getLetters("Введите свое имя на латинице:  ");

// number
const number1 = getNumber("Введите первое число:");
const number2 = getNumber("Введите второе число:");
const number3 = getNumber("Введите третье число:");

function getNumber(promptMessage) {
    let number;
    while (true) {
        number = parseFloat(prompt(promptMessage));
        if (!isNaN(number)) {
            return number;
        } else {
            alert("Можно вводить только числа!");
        }
    }
}

const sumNumber = (number1 + number2 + number3) / 3;


alert( "Привет " + userName + " ,среднее арифметическое трех чисел: " + sumNumber);
