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
        const that = this; // (25)
        this.cities.forEach(function(city){ // 27
            console.log(that.name + ' has lived in ' + city); // (30)
        });
    }
};
user.printPlacesLived();


/**
 * arguments object no longer bound with arrow functions
 * 05 - print out the arguments object
 * 10 - argument C (add(a,b)) doesn't exist, but the 'arguments' object still shows it
 * 20 - argument C (add(a,b)) doesn't exist, and we have an error if we uncomment (5)
 * 25 - using 'that' is a workaround to make (30) work
 * 27 - Error if using 'this'. No error if using 'that' in (25)
 * 30 - 'this' is not in scope here, ergo this.name is not accessible here.
 */