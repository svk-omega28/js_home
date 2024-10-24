'use strict';

import { isValidName, isValidPrice, isValidQuantity } from './helpers.js';

const product = {};

Object.defineProperty(product, 'name', {
  get() {
    return this._name;
  },
  set(value) {
    if (!isValidName(value)) {
      console.error('Ошибка: имя должно быть строкой и не должно быть пустым.');
    } else {
      this._name = value;
    }
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'price', {
  get() {
    return this._price;
  },
  set(value) {
    if (!isValidPrice(value)) {
      console.error('Ошибка: цена должна быть числом больше 0.');
    } else {
      this._price = value;
    }
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'quantity', {
  get() {
    return this._quantity;
  },
  set(value) {
    if (!isValidQuantity(value)) {
      console.error('Ошибка: количество должно быть положительным числом.');
    } else {
      this._quantity = value;
    }
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'totalValue', {
  get() {
    return this.price * this.quantity;
  },
  enumerable: true,
  configurable: false,
});

export default product;
