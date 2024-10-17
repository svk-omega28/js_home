'use strict';

import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './localStorage.js';

export const createTaskElement = (title, description) => {
  const colDiv = document.createElement('div');
  colDiv.classList.add('col-4', 'task-container');

  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('taskWrapper');

  const taskHeading = document.createElement('div');
  taskHeading.classList.add('taskHeading');
  taskHeading.textContent = title;

  const taskDescription = document.createElement('div');
  taskDescription.classList.add('taskDescription');
  taskDescription.textContent = description;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('btn', 'btn-danger', 'delete-button', 'mt-2');
  deleteButton.addEventListener('click', () => {
    colDiv.remove();

    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter((task) => task.title !== title || task.description !== description);
    saveTasksToLocalStorage(updatedTasks);
  });

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('btn', 'btn-warning', 'edit-button', 'mt-2');
  editButton.addEventListener('click', () => {
    if (editButton.textContent === 'Edit') {
      taskHeading.contentEditable = true;
      taskDescription.contentEditable = true;
      taskHeading.focus();
      editButton.textContent = 'Save';
    } else {
      const newTitle = taskHeading.textContent.trim();
      const newDescription = taskDescription.textContent.trim();

      const tasks = getTasksFromLocalStorage();
      const updatedTasks = tasks.map((task) => {
        if (task.title === title && task.description === description) {
          return { title: newTitle, description: newDescription };
        }
        return task;
      });
      saveTasksToLocalStorage(updatedTasks);

      taskHeading.contentEditable = false;
      taskDescription.contentEditable = false;
      editButton.textContent = 'Edit';
    }
  });

  taskWrapper.appendChild(taskHeading);
  taskWrapper.appendChild(taskDescription);
  taskWrapper.appendChild(deleteButton);
  taskWrapper.appendChild(editButton);
  colDiv.appendChild(taskWrapper);

  return colDiv;
};

export const renderTask = (title, description) => {
  const taskElement = createTaskElement(title, description);
  document.getElementById('todoItems').appendChild(taskElement);
};

export const loadTasks = () => {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => renderTask(task.title, task.description));
};
