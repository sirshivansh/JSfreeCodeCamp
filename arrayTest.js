/* Problem Statement :
Start by declaring a cities variable and initializing it as an array of the strings 
"London", "New York", and "Mumbai". Then log that variable to the console.
After logging, change the last element of cities to the string "Mexico City", then log the cities variable again. */

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);