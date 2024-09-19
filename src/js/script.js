'use strict';

Function.prototype.myBind = function (context, ...args) {
  const func = this;

  return function (...newArgs) {
    context.fn = func;
    const result = context.fn(...args, ...newArgs);
    delete context.fn;
    return result;
  };
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name} ${punctuation}`;
}

const person = { name: prompt('введите ваше имя') };

const greetPerson = greet.myBind(person, prompt('введите ваше приветсвие'));

const punctuationChoice = prompt('Выберите число от 1 до 3 *__*:\nСмайл 1\nСмайл 2\nСмайл 3');

let punctuation;
if (punctuationChoice === '1') {
  punctuation = '╭[☉﹏☉]╮';
} else if (punctuationChoice === '2') {
  punctuation = '(^˵◕ω◕˵^)';
} else if (punctuationChoice === '3') {
  punctuation = '( -_・)';
} else {
  punctuation = '???... эх ты а я говорил ввести от 1 до 3';
}

console.log(greetPerson(punctuation));
