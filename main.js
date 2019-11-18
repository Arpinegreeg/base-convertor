const reader = require('readline-sync');
const converter = require("./converter.js");

n = reader.question("Please input the number: ");

console.log(converter.convertToBinary(n));
console.log(converter.convertToHexa(n));