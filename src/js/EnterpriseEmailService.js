'use strict';

import EmailService from './EmailService.js';
import PremiumEmailService from './PremiumEmailService.js';

export default class EnterpriseEmailService extends EmailService {
    #premiumEmails = [];

    constructor() {
        super();
        if (this.#premiumEmails.length > 0) {

            return;
        }
        this.#premiumEmails = [];
    }

    addPremiumEmail(email) {
        this.#premiumEmails.push(email);
        this._log(`Added enterprise email: ${email}`);
    }

    migratePremiumEmails(targetService) {
        if (!(targetService instanceof PremiumEmailService)) {
            const errorMessage = "Target service must be an instance of PremiumEmailService.";
            this._log(errorMessage);
            throw new Error(errorMessage);
        }

        while (this.#premiumEmails.length > 0) {
            const email = this.#premiumEmails.shift();
            try {
                targetService.addPremiumEmail(email);
                this._log(`Migrated email to target service: ${email}`);
            } catch (error) {
                this._log(`Failed to migrate email: ${email} - ${error.message}`);
            }
        }
    }
}
