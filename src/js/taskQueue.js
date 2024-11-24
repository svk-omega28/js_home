'use strict';

import { delay } from './delay.js';

function TaskQueue(delayTime) {
  if (!(this instanceof TaskQueue)) {
    throw new Error("TaskQueue must be called with 'new'");
  }

  this.delayTime = delayTime;
  this.tasks = [];
  this.isRunning = false;
}

TaskQueue.prototype.addTask = function (task) {
  if (typeof task !== 'function') {
    throw new Error('Task must be a function that returns a Promise');
  }
  this.tasks.push(task);
};

TaskQueue.prototype.run = function () {
  if (this.isRunning) {
    return Promise.reject('Queue is already running');
  }

  this.isRunning = true;
  let currentTaskIndex = 0;

  const executeNextTask = () => {
    if (currentTaskIndex >= this.tasks.length) {
      this.isRunning = false;
      return Promise.resolve('Все задания завершены');
    }

    const task = this.tasks[currentTaskIndex];
    currentTaskIndex++;

    return task()
      .then((result) => {
        console.log(result);
        return delay(this.delayTime);
      })
      .catch((error) => {
        console.error('Ошибка в задании:', error);
        return delay(this.delayTime);
      })
      .then(executeNextTask);
  };

  return executeNextTask();
};

export { TaskQueue };
