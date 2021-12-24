/*
Create a program that asks the user for height and width and calculate the rectangle area. With input values, the program should calculate the area and display the answer in the console.

Start by pseudocode. 
*/

// PSEUDOKOD
/*
Start
ask for height 
ask for width
calculate the area
print the answer
End
*/
let height = prompt('Ange höjd');
console.log(height);
let width = prompt('Ange bredd');
console.log(width);

let area = height * width;
let message = "The area of the square is " + area;

alert(message);
console.log(message);