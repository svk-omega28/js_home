'use strict';

const instances = new Map();

export default class EmailService {
    #logs = [];

    constructor() {
        const className = this.constructor.name;

        if (instances.has(className)) {
            return instances.get(className);
        }

        instances.set(className, this);
    }

    _log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}`;
        this.#logs.push(logMessage);
        console.log(logMessage);
    }

    getLogs() {
        return [...this.#logs];
    }
}
