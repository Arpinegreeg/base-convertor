const reader = require('readline-sync');
const util1 = require("./convertToBinary.js");
const util2 = require("./convertToHexa.js");

n = reader.question("Please input the number: ");

util1.printArray(util1.convertToBinary(n));
console.log();
util1.printArray(util2.convertToHexa(n));
