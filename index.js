// // Basic javaScript function example.

// function sayHello(name){
//     console.log('Hello ' + name);
// }

// sayHello("Andrew");

// // Basic use of modules example.

// const underscore = require('underscore');

// let result = underscore.contains([1,2,3], 3);
// console.log(result);

// console.log(module);

const logger = require('./logger');

logger.logMessage(logger.message);