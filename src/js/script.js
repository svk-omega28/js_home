'use strict';

const userName = prompt('Как вас зовут?');
function generateKey(lenght, characters) {
  let key = '';
  const charactersLength = characters.length;

  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    key += characters[randomIndex];
  }

  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const key = generateKey(16, characters);
console.log(`${userName}, вот вам ключ для активации:  ${key}`);
