'use strict';

import product from './product.js';

product.name = 'Молоко';
product.quantity = 30;
product.price = 25;

console.log(`Товар: ${product.name}`);
console.log(`Цена: ${product.price}`);
console.log(`Количество: ${product.quantity}`);
console.log(`Общая стоимость: ${product.totalValue}`);
