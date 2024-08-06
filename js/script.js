"use strict";

const userName = prompt("Как вас зовут?");
console.log(userName);

const hoursString = prompt("Укажите сколько часов вам перевести в секунды?");
console.log(hoursString);

let hours = Number(hoursString);
console.log(hours + " часов");

let resultsminutes = Number(hours) * 60;
console.log(resultsminutes + " минут");

let resultsseconds = Number(resultsminutes) * 60;
console.log(resultsseconds + " секунд");

alert(`${userName}, результат вашего запроса:\n${"=========================="}\n${hours + " часов"}\n${resultsminutes + " минут (ы)"}\n${resultsseconds + " секунд (ы)"}\n${"=========================="}\n`);
