'use strict';

import User from './user.js';

document.addEventListener('DOMContentLoaded', () => {
  const user = new User('Влад', 27);
  console.log('Имя пользователя:', user.name);
  console.log('Возраст пользователя:', user.age);

  console.log('==============================');

  user.name = 'Вова';
  console.log('Новое имя пользователя:', user.name);

  user.age = 1001; // Ошибка
  console.log('Новый возраст пользователя:', user.age);

  user.age = 30;
  console.log('Нормальный возраст пользователя', user.age);
});
