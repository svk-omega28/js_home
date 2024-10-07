'use strict';

const logListItems = () => {
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach((item) => console.log(item.textContent));
};
logListItems();

const logUlAttributeValues = () => {
  const ul = document.querySelector('ul');
  const valuesArray = [];

  for (const attr of ul.attributes) {
    valuesArray.push(attr.value);
  }

  console.log(valuesArray);
};
logUlAttributeValues();

const logUlAttributeNames = () => {
  const ul = document.querySelector('ul');
  const namesArray = [];

  for (const attr of ul.attributes) {
    namesArray.push(attr.name);
  }

  console.log(namesArray);
};
logUlAttributeNames();

const changeLastListItemText = (name) => {
  const listItems = document.querySelectorAll('ul li');
  listItems[listItems.length - 1].textContent = `привет, я  ${name}`;
};
changeLastListItemText('Влад');

const addMyNameAttribute = (name) => {
  const firstListItem = document.querySelector('ul li');
  firstListItem.setAttribute('data-my-name', name);
};
addMyNameAttribute('Влад');

const removeDogTailAttribute = () => {
  const ul = document.querySelector('ul');
  ul.removeAttribute('data-dog-tail');
};
removeDogTailAttribute();
