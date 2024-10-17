'use strict';

import { handleFormSubmit, handleResetClick } from './formHandler.js';
import { loadTasks } from './taskManager.js';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const resetButton = document.getElementById('resetBtn');

  window.addEventListener('load', loadTasks);

  form.addEventListener('submit', (event) => handleFormSubmit(event, form));

  resetButton.addEventListener('click', () => handleResetClick(form));
}());
