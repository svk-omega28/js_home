'use strict';

import EmailService from './EmailService.js';
import renderError from './renderError.js';

export default class PremiumEmailService extends EmailService {
    static instance = null;

    #premiumEmails = [];
    #maxPremiumEmails = 5;

    constructor() {
        if (PremiumEmailService.instance) {
            return PremiumEmailService.instance;
        }
        super();

        PremiumEmailService.instance = this;
    }

    addPremiumEmail(email) {
        if (this.#premiumEmails.length >= this.#maxPremiumEmails) {
            const errorMessage = `Cannot add more than ${this.#maxPremiumEmails} premium emails.`;
            this._log(errorMessage);
            renderError(errorMessage);
            throw new Error(errorMessage);
        }
        this.#premiumEmails.push(email);
        this._log(`Added premium email: ${email}`);
    }

    getPremiumEmails() {
        return [...this.#premiumEmails];
    }
}
