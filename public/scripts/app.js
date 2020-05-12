"use strict";

var square = function square(x) {
    // (10)
    return x * x;
};
console.log(square(8));

var squareArrow = function squareArrow(x) {
    // (20)
    return x * x;
};
console.log(squareArrow(9));

/**
 * 10 - ES5 function. Can have a name.
 * 20 - ES6 function. Always anonymous. Cannot add a name. Good for conciseness.
 */
