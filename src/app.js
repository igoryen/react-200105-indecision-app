// // import './utils.js'
import subtract, { square, add } from './utils.js';

console.log('app.js is running!!!');
console.log(square(4));
console.log(add(100,23));
console.log(subtract(100, 81));

// import { isAdult, canDrink} from './person.js';
// console.log("is adult? ", isAdult(20));
// console.log("can drink?", canDrink(21));

// the difference between 'default' and 'named' exports:
// naming is lax, e.g. all instances of 'subtract' here in this file
// can be named to foobar or anything else arbitrary