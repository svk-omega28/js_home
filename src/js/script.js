'use strict';

const insertWordInto = (str) => {
  const parts = str.split(' ');

  return (word) => {
    const wordWithSpaces = word;

    const insertPosition = Math.floor(Math.random() * (parts.length + 0.5));

    parts.splice(insertPosition, 0, wordWithSpaces);

    return parts.join(' ');
  };
};

const insert = insertWordInto('hello world');
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
