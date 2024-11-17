'use strict';

/** @param {string[]} logs */

export default function renderLogs(logs) {
  const logContainer = document.getElementById('log-container');
  logs.forEach((log) => {
    const logItem = document.createElement('div');
    logItem.className = 'log-item';
    logItem.textContent = log;
    logContainer.appendChild(logItem);
  });
}
