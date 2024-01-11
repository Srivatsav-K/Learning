// exporting patterns

// Define and export
const add = (a, b) => a + b;

// Directly attach the default export
//module.exports = (a, b) => a - b;

// Attach to the exports object
module.exports.multiply = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;

//! Not recommended but possible (using the exports variable provided by iife)
//exports.square = (n) => n ** n;

module.exports = add;
