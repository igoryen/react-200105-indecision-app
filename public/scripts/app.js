'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike'; // #10
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'July'; // #20
console.log('nameLet', nameLet);

var nameConst = 'Frank'; // #25
// const nameConst = 'Gunther'; // #30
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hank';
    return petName;
}
var petName = getPetName();
getPetName();
console.log(petName);

var fullName = 'Igor Yen';
if (fullName) {
    var _firstName = fullName.split(' ')[0];
    console.log(_firstName);
}

console.log(firstName);
/**
 * 10 - overwriting, reassigning, redefining previous homonymous var. no complaints.
 * 20 - writing "let nameLet" is an error
 * 25 - a const cannot be redefined, its value can never be changed.
 * 30 - duplicate declaration
 */
