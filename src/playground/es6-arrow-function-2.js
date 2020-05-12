const add = function(a,b) {
    console.log(arguments); // (5)
    return a + b;
}
console.log(add(55,1,1000)); // (10)

const adicionar = (a,b) => {
    // console.log(arguments);// (5)
    return a + b;
}

console.log(adicionar(55,1,1000)); // (20)

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);
    }
};
user.printPlacesLived();


/**
 * arguments object no longer bound with arrow functions
 * 05 - print out the arguments object
 * 10 - argument C (add(a,b)) doesn't exist, but the 'arguments' object still shows it
 * 20 - argument C (add(a,b)) doesn't exist, and we have an error if we uncomment (5)
 */