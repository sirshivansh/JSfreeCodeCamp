// arrays are denoted using square brackets []
let array1 = [];
// NOTE : NO TWO ARRAYS CAN BE INITIALIZED WITH SAME NAME, here array1 and array are two separate names.
let array = [1,2,3];
// the values in the array are separated using commas
console.log(array[0]);
// the values in the arrays can be accessed using index, starting from 0 for the 1st element
array[1] = 25;
// arrays are mutable , i.e. their values can be changed
console.log(array)

// to know how many elements are present in the array use ".length" property.
console.log(array.length);
// to access last element of an array
console.log(array.length - 1);