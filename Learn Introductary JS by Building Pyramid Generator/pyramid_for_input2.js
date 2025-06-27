// NOTE : This will only run in browser.

const character = "#";
const count = parseInt(prompt("Enter number of lines for pyramid: ")); //prompt() is a browser-specific function
let rows = [];

function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for(let i = 0; i < count; i++){
    rows.push(padRow(i+1, count));
}
console.log(rows.join("\n"));