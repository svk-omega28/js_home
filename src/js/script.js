'use strict';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsContainer = document.getElementById('todoItems');
  const resetButton = document.getElementById('resetBtn');

  const createTaskElement = (title, description) => {
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
    deleteButton.classList.add('btn', 'btn-danger', 'delete-button', 'mt-3');
    deleteButton.addEventListener('click', () => {
      colDiv.remove();
    });

    taskWrapper.appendChild(taskHeading);
    taskWrapper.appendChild(taskDescription);
    taskWrapper.appendChild(deleteButton);
    colDiv.appendChild(taskWrapper);

    return colDiv;
  };

  const renderTask = (title, description) => {
    const taskElement = createTaskElement(title, description);
    todoItemsContainer.appendChild(taskElement);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value.trim();
    const description = event.target.description.value.trim();

    if (title && description) {
      renderTask(title, description);
      form.reset();
    }
  };

  const handleResetClick = () => {
    form.reset();
  };

  form.addEventListener('submit', (event) => handleFormSubmit(event));

  resetButton.addEventListener('click', handleResetClick);
}());
