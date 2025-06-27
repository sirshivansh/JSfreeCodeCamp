const character = "#";
const rows = [];
let count;

// This Function will generate pyramid
function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2* rowNumber - 1) + " ".repeat(rowCount - rowNumber)
}

// Environment Detection
if(typeof window !== "undefined" && typeof prompt === "function"){
    // Browser Environment
    // as window and prompt are only present in browser
    count = parseInt(prompt("Enter number of lines for pyramid: "));
    generatePyramid(count);
} else {
    // Node.js Environment 
    const readline = require('readline'); //readline module is built-in for node.js, to take terminal input
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    r1.question("Enter number of lines for pyramid: ", function(input){
        count = parseInt(input);
        generatePyramid(count);
        r1.close();
    });
}

//Function to generate full pyramid
function generatePyramid(count){
    for(let i=0; i<count; i++){
        rows.push(padRow(i+1, count));
    }
    console.log(rows.join("\n"));
}