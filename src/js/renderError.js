'use strict';

/** @param {string} errorMessage */
export default function renderError(errorMessage) {
  let errorContainer = document.getElementById('error-container');

  if (!errorContainer) {
    const errorsSection = document.createElement('div');
    errorsSection.className = 'errors';

    const errorsHeader = document.createElement('h2');
    errorsHeader.textContent = 'Error Messages';
    errorsSection.appendChild(errorsHeader);

    errorContainer = document.createElement('div');
    errorContainer.id = 'error-container';
    errorsSection.appendChild(errorContainer);

    document.body.appendChild(errorsSection);
  }

  const existingError = Array.from(errorContainer.children).find(
    (child) => child.textContent === errorMessage,
  );

  if (existingError) {
    return;
  }

  const errorItem = document.createElement('div');
  errorItem.className = 'error-item';
  errorItem.textContent = errorMessage;
  errorContainer.appendChild(errorItem);

  errorContainer.parentElement.classList.add('show');
}
