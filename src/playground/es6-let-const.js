var nameVar = 'igoryen';
var nameVar = 'igor';
console.log('nameVar: ', nameVar);

let nameLet = 'Jenica';
nameLet = 'Joy';
console.log('nameLet: ', nameLet);


const nameConst = 'Frank';
// nameConst = 'Daniel';
console.log('nameConst: ', nameConst);

function getPetName() {
    const petName = 'Hank';
    return petName;
}
const petName = getPetName();
getPetName();
console.log(petName);

var fullName = 'Igor Yen';
if( fullName ) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName)
} 

console.log(firstName);
