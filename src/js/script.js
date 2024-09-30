'use strict';

const textInput = document.querySelector('#textInput');
const infoDiv = document.querySelector('.new-div');

textInput.addEventListener('focus', () => {
  infoDiv.style.display = 'block';
});

textInput.addEventListener('blur', () => {
  infoDiv.style.display = 'none';
});
