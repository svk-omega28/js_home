"use strict";

// Task 1 Start
const birthYear = prompt("Введите свой год рождения:");
if (birthYear === null) {
    alert("Жаль что вы не ввели свой день рождения");
    throw new Error("User cancelled input");
}


const city = prompt("В каком городе вы живете?");
if (city === null) {
    alert("Жаль что вы не захотели указать свой город");
    throw new Error("User cancelled input");
}



const sport = prompt("Ваш любимый вид спорта?");
if (sport === null) {
    alert("Жаль что вы не захотели вводить свой любимый вид спорта");
    throw new Error("User cancelled input");
}

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;


let cityMessage;
switch (city.toLowerCase()) {
    case "киев":
        cityMessage = "Ти живешь с толице Украины!";
        break;
    case "вашингтон":
        cityMessage = "Ти живешь в столице США!";
        break;
    case "лондон":
        cityMessage = "Ти живешь в столице Великобритании!";
        break;
    default:
        cityMessage = `Ты живешь в городе ${city}.`;
}

// Task 2 Start

const champions = {
    "футбол": "Линель Месси",
    "тенис": "День Доров",
    "бокс": "Майк Укуси ухо"
};


let sportMessage;
if (champions[sport.toLowerCase()]) {
    sportMessage = `Круто! Хочешь стать как ${champions[sport.toLowerCase()]}?`;
} else {
    sportMessage = `Ваш любимый вид спорта: ${sport}.`;
}


const
    finalMessage = `Ваш возраст: ${age}\n${cityMessage}\n${sportMessage}`;


alert(finalMessage);

// Task 2 End