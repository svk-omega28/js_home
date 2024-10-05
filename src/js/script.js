'use strict';

const createHintBox = (message) => {
  const div = document.createElement('div');
  div.classList.add('hint-box');
  div.innerText = message;
  return div;
};

const addHintBoxToDOM = (hintBox) => {
  document.body.appendChild(hintBox);
};

const removeHintBoxFromDOM = (hintBox) => {
  document.body.removeChild(hintBox);
};

const attachEventsToInput = (inputId, hintMessage) => {
  const input = document.getElementById(inputId);
  let hintBox = null;

  input.addEventListener('focus', () => {
    if (!hintBox) {
      hintBox = createHintBox(hintMessage);
      addHintBoxToDOM(hintBox);
    }

    positionHintBox(input, hintBox);
    hintBox.style.display = 'block';
  });

  input.addEventListener('blur', () => {
    if (hintBox) {
      removeHintBoxFromDOM(hintBox);
      hintBox = null;
    }
  });
};

attachEventsToInput('input1', 'test 1');
attachEventsToInput('input2', 'test 2');
attachEventsToInput('input3', 'test 3');
