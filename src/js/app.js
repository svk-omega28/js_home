'use strict';

import deepFreeze from './deepFreeze.js';

// Создаем объект
const user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      },
    },
  },
};

(function () {
  deepFreeze(user);
  console.log('Объект заморожен:', user);
}());
console.log(Object.isFrozen(user), 'проверка ture / false');
