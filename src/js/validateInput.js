'use strict';

export function validatePostId(id) {
  const num = Number(id);
  return num >= 1 && num <= 100;
}
