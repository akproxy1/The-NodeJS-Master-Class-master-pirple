/*
 * Title: Math Library
 * Description: Utility library for math-related functions
 * Author: Akeem Adeoti
 * Date: 10/12/20
 *
 */


// App object
const math = {};

// Get a random integer between two integers
// Inspired by: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
math.getRandomNumber = function(min,max){
    min = typeof(min) == 'number' && min % 1 === 0 ? min : 0;
    max = typeof(max) == 'number' && max % 1 === 0 ? max : 0;
    return Math.floor(Math.random()*(max-min+1)+min);
};
//console.log(Math.random());
console.log(math.getRandomNumber(45,50));


// Export the library
module.exports = math;
