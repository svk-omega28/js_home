'use strict';

export function isValidName(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function isValidPrice(value) {
  return typeof value === 'number' && value > 0;
}

export function isValidQuantity(value) {
  return typeof value === 'number' && value > 0;
}
