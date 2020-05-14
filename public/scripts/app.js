'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = name || 'default'; // (10)
};

var me = new Person('Andrew Mead');
console.log(me);

var other = new Person();
console.log(other);

/**
 * 10 - 'this' refers to the instance of the class.
 */
