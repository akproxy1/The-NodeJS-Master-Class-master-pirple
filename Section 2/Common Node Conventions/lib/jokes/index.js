/*
 * Title: Jokes Library
 * Description: Utility library for getting a list of Jokes
 * Author: Akeem Adeoti
 * Date: 10/12/20
 *
 */


// Dependencies
const fs = require('fs');

// App object
const jokes = {};

// Get all the jokes and return them to the user
jokes.allJokes = function(){

    // Read the text file containing the jokes
    const fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf8');

    // Turn the string into an array
    const arrayOfJokes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfJokes;

};
console.log(jokes.allJokes());
// Export the library
module.exports = jokes;
