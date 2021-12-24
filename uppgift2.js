/* I den här uppgiften ska ni arbeta med nummer/integers och strings. 
Datorn kan läsa numeriska värden som de är men inte tecken. 
Använd citattecken för att lägga in tecken som data.
*/


var name = "Maisa" //ditt namn som en string;
var age = 40 //din ålder som en siffra;
var height = 156 //din längd som en siffta i cm;
var weight = 62 //din vikt som en siffra i kg;
var eyes = "brun"//färgen på dina ögon som en string;
var hair = "brun"//färgen på ditt hår som en string;
var sum = age + height + weight;

console.log("Det här är " + name + ".");
console.log(name + " är " + age + " år");
console.log(name + " är " + height + "cm lång.");
console.log(name + " väger " + weight + "kg.");
console.log(name + " har " + eyes + " ögon och " + hair + " hår");


console.log("Om vi lägger ihop " + name + "s ålder vikt och längd får vi " + sum);