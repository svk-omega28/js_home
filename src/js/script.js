/*
'use strict';

const constNumber2 = 666;

const demoVariableScopes = () => {
  // Цикл for з використанням var, let і const
  for (let i = 1; i < 2; i++) {
    var varNumber = 20;
    const constNumber = 30;

    console.log(`let ${i}`);
    console.log(`var: ${varNumber}`);
    console.log(`const: ${constNumber}`);
    console.log(`const2 вне функции: ${constNumber2}`);
  }

  console.log('цикл закончился');
  /!*  console.log(`let вне цикла ${i}`); // error
  console.log(`var вне цикла: ${varNumber}`); // error
  console.log(`var вне цикла: ${constNumber2}`); // error *!/

  console.log(`var - можно достать его за пределами цикла for: ${varNumber}`);
};
console.log(`const3 вне функции: ${constNumber2}`);
// Виклик функції
demoVariableScopes();

// constNumber2 - находиться в глобальной видимости, его можно использовать по всему коду js.
// constNumber - можно использовать внутри функции блочная видимость
// i - можно использовать внутри функции блочная видимость
// varNumber - hoisting поднятие переменных

// более подробно читал вот тут https://doka.guide/js/closures/
*/
