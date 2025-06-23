let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
console.log(secondCharacter);
//undefined  is the default value of uninitialized variable.
secondCharacter = "Test";
//we can still assign value to an uninitialized variable.
console.log(secondCharacter);

//we can assign the value of a variable to another variable.
secondCharacter = character;
console.log(secondCharacter);
