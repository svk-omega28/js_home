'use strict';

import { TaskQueue } from './taskQueue.js';
import { initLogContainer, logMessage } from './domUtils.js';

const logContainer = initLogContainer();

const originalConsoleLog = console.log;
const originalConsoleError = console.error;

console.log = function (...args) {
  originalConsoleLog(...args);
  args.forEach((arg) => logMessage(logContainer, arg));
};

console.error = function (...args) {
  originalConsoleError(...args);
  args.forEach((arg) => logMessage(logContainer, arg, true));
};

const qUrl = new TaskQueue(1000);

qUrl.addTask(() => Promise.resolve('Task 1 выполнено'));
qUrl.addTask(() => Promise.resolve('Task 2 выполнено'));
qUrl.addTask(() => Promise.resolve('Task 3 выполнено'));
qUrl.addTask(() => Promise.reject('Task 4 не удалось выполнить'));
qUrl.addTask(() => Promise.resolve('Task 5 выполнено'));

qUrl.run()
  .then((message) => {
    console.log(message);
    alert('Скрипт окончен');
  })
  .catch((error) => {
    console.error(error);
  });
