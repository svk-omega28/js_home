'use strict';

const phoneNumbers = users

  .filter(({ balance }) => +balance.replace(/[^0-9.-]+/g, '') > 2000)
  .map(({ phone }) => phone);

console.log('телефонные номера с балансом больше 2000');
console.log(phoneNumbers);

const totalBalance = users
  .reduce((sum, user) => sum + +(user.balance.replace(/[^0-9.-]+/g, '')), 0);

console.log(`сумма всех балансов: $${totalBalance.toFixed(2)}`);
