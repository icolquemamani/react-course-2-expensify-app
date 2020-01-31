console.log('utils.js is running');

const square = ( x ) => x * x;
const add = ( a, b ) => a + b;

const subtract = ( a, b ) => a - b;
export { square, add };  // se puede cambiar el nombre al default en la exportacion

// default exports
// export default subtract;
export default ( a, b ) => a - b;

// module.exports.square = square;