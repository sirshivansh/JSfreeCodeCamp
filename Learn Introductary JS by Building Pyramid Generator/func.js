// Function is a block of code that can be reused throughout the application.
/* SYNTAX :
function name(parameter){
    body;
} */

// in order to use the function, we call it: => name();
// by default , function sreturn undefined as their value.

function demo(){
    return "Functions are cool";
}
const var1 = demo();
console.log(var1);

//Problem: 
// Declare a function named addTwoNumbers. 
// This function should take two arguments and return the sum of those two arguments.
// Your function should not use hard-coded values

//Problem Statement: 
// Declare a sum variable and assign it the value of calling your addTwoNumbers function 
// with 5 and 10 as the arguments. Log the sum variable to the console.

function addTwoNumbers(num1, num2){
    return num1 + num2;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);