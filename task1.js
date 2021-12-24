/* 
In this task you will work with numbers / integers.
To solve the problem, use common mathematical operators such as +, -, *, /.
Make sure that the first <script> line in index.html is not commented out when testing the code.

To see the result of your code, you need to open the browser console.
After you have completed the task, manipulate the values in the variables below and see what happens.
*/

var cars = 100;
var seats_in_car = 4;
var drivers = 30;
var passengers = 90;

//Use the variables above to solve the code below

var cars_without_drivers = cars - drivers; //Calculate how many cars do not have a driver

var cars_with_drivers = cars - cars_without_drivers;//Calculate how many cars have a driver

var carpool_capacity = cars_with_drivers * seats_in_car; //Calculate the total number of passenger seats, all cars with drivers (cars_with_drivers) have together;

var average_passengers_per_car_in_pool = passengers / cars_with_drivers //Calculate the average number of passengers per car included in the carpool.

//When you have finished the variables above, the code below should show the result in the console on your browser

console.log("There are " + cars + " cars available.");
console.log("There are only " + drivers + " drivers available");
console.log("There will be " + cars_without_drivers + " cars without drivers");
console.log("We can transport " + carpool_capacity + " people today");
console.log("We have " + passengers + " to carpool today");
console.log("We need to put about " + average_passengers_per_car_in_pool + " in each car");