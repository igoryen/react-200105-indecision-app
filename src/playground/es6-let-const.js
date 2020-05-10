var nameVar = 'Andrew';
var nameVar = 'Mike'; // (10)
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'July'; // (20)
console.log('nameLet', nameLet);

const nameConst = 'Frank'; // (25)
// const nameConst = 'Gunther'; // (30)
console.log('nameConst', nameConst);

function getPetName() { // (35)
    // var petName = 'Hal'; // (40)
    const petName = 'Hal'; // (40)
    return petName;
}
const petName = getPetName(); // (45)
getPetName();
console.log(petName);

// Block scoping
// the scope of let and const vars are the block.

const fullName = 'Andrew Mead'; // (46)
let firstName; // (47)
if( fullName ) { // (50)
    // var firstName = fullName.split(' ')[0]; // (55)
    // const firstName = fullName.split(' ')[0]; // (56)
    // let firstName = fullName.split(' ')[0]; // (57)
    firstName = fullName.split(' ')[0]; // (58)
    console.log(firstName)
} 

console.log(firstName); // (60)
/**
 * 10 - overwriting, reassigning, redefining previous homonymous var. no complaints.
 * 20 - writing "let nameLet" is an error
 * 25 - a const cannot be redefined, its value can never be changed.
 * 30 - duplicate declaration
 * 35 - scope A in which petName is defined 
 * 40 - 'var' makes it inaccessible from the outside of the func
 * 45 - scope B in which petName is defined
 * 46 - const since the nature of fullName's value is that it's composite and shouldn't change
 * 47 - declare firstName outside of the if scope, if 58
 * 50 - if the fullName exists...
 * 57 - firstName is specific only to the if block, it won't bleed out to other scopes
 * 58 - define firstName (assign value) inside the scope, if 47
 * 60 - if (55), then it will print the value of firstName 
 *      if (56) or (57), then it will get "Uncaught ReferenceError: firstName is not defined".
 */