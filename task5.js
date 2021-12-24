/*
Create a program that converts celcius to farenheit.
The user must provide input (numeric values) in the celcius as the program
then should convert to farenheit and print it as a popup.

Translate program first into a pseudocode. 

Search for the mathematical formula that converts celcius to farenheit. 
*/

/**
 * PSEUDOKOD
 * 
 * Enter grader i celcius?
 * Convert celsius to fahrenheit
 * Show the answer.
 */

let numberInCelcius  = prompt('Enter grader i celcius');
let convertToFahrenheit = (numberInCelcius * 9) / 5 + 32;
alert(`${numberInCelcius} grader in celcius is ${convertToFahrenheit} grader in fahrenheit`);
