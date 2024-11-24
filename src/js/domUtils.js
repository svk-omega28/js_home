'use strict';

function initLogContainer() {
  let logContainer = document.getElementById('log');
  if (!logContainer) {
    logContainer = document.createElement('div');
    logContainer.id = 'log';
    document.body.appendChild(logContainer);
  }
  return logContainer;
}

function logMessage(container, message, isError = false) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  if (isError) {
    messageElement.classList.add('error');
  }
  container.appendChild(messageElement);
}

export { initLogContainer, logMessage };
