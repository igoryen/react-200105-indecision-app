console.log('utils.js is running!!!');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// named export
// export { square, add };

// default export
// export {  square, add, subtract as default}; // 0 or 1 'subtract'
export default subtract;