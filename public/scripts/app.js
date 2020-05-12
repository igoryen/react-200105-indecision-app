'use strict';

var add = function add(a, b) {
    console.log(arguments); // (5)
    return a + b;
};
console.log(add(55, 1, 1000)); // (10)

var adicionar = function adicionar(a, b) {
    // console.log(arguments);// (5)
    return a + b;
};

console.log(adicionar(55, 1, 1000)); // (20)

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // (23)
        // const that = this; // (25)
        // this.cities.forEach(function(city){ // 27
        // this.cities.forEach((city) => { // 28
        //     console.log(this.name + ' has lived in ' + city); // (30)
        // });
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        }); // (40)            
    }
};
console.log(user.printPlacesLived());

/**
 * arguments object no longer bound with arrow functions
 * 05 - print out the arguments object
 * 10 - argument C (add(a,b)) doesn't exist, but the 'arguments' object still shows it
 * 20 - argument C (add(a,b)) doesn't exist, and we have an error if we uncomment (5)
 * 23 - lack of keyword 'function' has characteristics of an ES5 function.
 * 25 - using 'that' is a workaround to make (30) work
 * 27 - Error if using 'this'. No error if using 'that' in (25)
 * 28 - Arrow function uses 'this' of the parent
 * 30 - 'this' is not in scope here, ergo this.name is not accessible here.
 * 40 - map() creates a new array.
 */
