'use strict';

var nameVar = 'igoryen';
var nameVar = 'igor';
console.log('nameVar: ', nameVar);

var nameLet = 'Jenica';
nameLet = 'Joy';
console.log('nameLet: ', nameLet);

var nameConst = 'Frank';
// nameConst = 'Daniel';
console.log('nameConst: ', nameConst);

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
