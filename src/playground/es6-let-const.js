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

var fullName = 'Igor Yen';
if( fullName ) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName)
} 

console.log(firstName);
/**
 * 10 - overwriting, reassigning, redefining previous homonymous var. no complaints.
 * 20 - writing "let nameLet" is an error
 * 25 - a const cannot be redefined, its value can never be changed.
 * 30 - duplicate declaration
 * 35 - scope A in which petName is defined 
 * 40 - 'var' makes it inaccessible from the outside of the func
 * 45 - scope B in which petName is defined
 */