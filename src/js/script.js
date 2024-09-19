'use strict';

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const flattenArray = (arr, ...rest) => {
  if (rest.length > 0) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }

  const flatten = (array) => array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

  return flatten(arr);
};

console.log(flattenArray(complexArray)); // good
console.log(flattenArray([1, 2, [3, 4]], [5, 6])); // var
