// when you have to perform a task repeatedly until a condition is met, we will use a loop
// 1. for loop

/*
for(Iterator; Condition; Iteration){
    logic;
}
*/

//Printing numbers from 0 to 7
const count = 8;
for (i = 0; i < count; i = i + 1){
    console.log(i);
}

// "for...of" Loop
/* SYNTAX :
for ( const value of iterable ){
    logic;
} */

// Create a for...of loop to iterate through your rows array, 
// use the addition operator to concatenate the row value to the result value.
const rows = [];
let result = '';
const count1 = 8;

for(let i = 0; i < count1 ; i=i+1){
    rows.push(i);
}

for ( const row of rows ){
    result = result + row;
}
console.log(result);