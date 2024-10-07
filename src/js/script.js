'use strict';

const generateListItem = (item) => {
  const li = document.createElement('li');
  if (Array.isArray(item)) {
    li.appendChild(generateList(item));
  } else {
    li.textContent = item;
  }
  return li;
};

const generateList = (array) => {
  const ul = document.createElement('ul');
  array.forEach((item) => {
    ul.appendChild(generateListItem(item));
  });
  return ul;
};

const data = [1, 2, [1.1, 'secondary', 1.2, 1.3], 3, 'test', 'primary'];
console.log(data);
document.body.appendChild(generateList(data));
