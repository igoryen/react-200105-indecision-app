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

/**
 * arguments object no longer bound with arrow functions
 * 05 - print out the arguments object
 * 10 - argument C (add(a,b)) doesn't exist, but the 'arguments' object still shows it
 * 20 - argument C (add(a,b)) doesn't exist, and we have an error if we uncomment (5)
 */