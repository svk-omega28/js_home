'use strict';

const deepFreeze = (obj) => {
  Object.freeze(obj);

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  return obj;
};

export default deepFreeze;
