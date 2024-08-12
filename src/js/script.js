"use strict";


const numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('ви скасували' );
        console.log(typeof numOrStr);
        break;

    case numOrStr.trim() === '':
        console.log('Empty String');
        console.log(typeof numOrStr);
        break;

    case isNaN(+numOrStr):
        console.log('number is isNaN');
        console.log(typeof numOrStr);
        break;

    default:
        console.log('OK!');
        console.log(typeof numOrStr);
        break;
}
