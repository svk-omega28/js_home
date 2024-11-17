'use strict';

import PremiumEmailService from './PremiumEmailService.js';
import EnterpriseEmailService from './EnterpriseEmailService.js';
import renderLogs from './renderLogs.js';
import renderError from './renderError.js';

const premiumService1 = new PremiumEmailService();
const premiumService2 = new PremiumEmailService();
const enterpriseService = new EnterpriseEmailService();

try {
  premiumService1.addPremiumEmail('vip1@premium.com');
  premiumService1.addPremiumEmail('vip2@premium.com');
  premiumService1.addPremiumEmail('vip3@premium.com');
  premiumService1.addPremiumEmail('vip4@premium.com');
  premiumService1.addPremiumEmail('vip5@premium.com');

  // premiumService1.addPremiumEmail('vip6@premium.com');
} catch (error) {
  console.error(error.message);
  renderError(error.message);
}

const allLogs = premiumService1.getLogs();
renderLogs(allLogs);
