const numbers = [1,2,3];
const shifted = numbers.shift();
console.log(shifted) //.shift() method is used to rmeove the first element of the array
const unshifted = numbers.unshift(5);
console.log(unshifted); // .unshift() returns the new length of array it was called on
console.log(numbers);