'use strict';

import { renderTask } from './taskManager.js';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './localStorage.js';

export const handleFormSubmit = (event, form) => {
  event.preventDefault();

  const title = event.target.title.value.trim();
  const description = event.target.description.value.trim();

  if (title && description) {
    renderTask(title, description);

    const tasks = getTasksFromLocalStorage();
    tasks.push({ title, description });
    saveTasksToLocalStorage(tasks);

    form.reset();
  }
};

export const handleResetClick = (form) => {
  form.reset();
};
