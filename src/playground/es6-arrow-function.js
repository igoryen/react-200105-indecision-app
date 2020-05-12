// const square = function (x) { // (10)
//     return x * x;
// }
// console.log(square(8));


// // const squareArrow = (x) => { // (20)
// //     return x * x;
// // }

// const squareArrow = (x) => x * x; // (30)

// console.log(squareArrow(9));


//===============================
// 2 versions of the same function: expaned and short
// getFirstName('Mike') outputs 'Mike'

const fullName = 'Andrew Mead'; 

const getFirstNameA = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstNameB = (fullName) => fullName.split(' ')[0];

console.log("getFirstNameA", getFirstNameA(fullName));
console.log("getFirstNameB", getFirstNameB(fullName));


/**
 * 10 - ES5 function. Can have a name.
 * 20 - ES6 function. Always anonymous. Cannot add a name. Good for conciseness.
 * 30 - an even more concise version of (20)
 */