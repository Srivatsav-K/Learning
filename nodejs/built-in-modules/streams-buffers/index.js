const { Buffer } = require("node:buffer");

// Relationship between Buffer and binary data, charsets, encoding.
const buffer = Buffer.from("sri", "utf-8"); // If encoding is not provided(2nd arg), it deafults to utf-8.

console.log(buffer.toJSON()); // { type: 'Buffer', data: [ 115, 114, 105 ] } (data array contains the  unicode representation for each letter)

console.log(buffer.toString()); // "sri"

console.log(buffer); // <Buffer 73 72 69> (binary representation of unicode for "sri" in hexadecimal(o/p is shown in hex beacause binary will be too large to show in terminal) )
/* 
  "s" - string
  115 - unicode
  73 - hex
  1110011 - binary
*/
const hex = 73;
const decimal = parseInt(hex, 16); // 115
const binary = decimal.toString(2); //1110011
