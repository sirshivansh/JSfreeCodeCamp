const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const character = "#";

function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

r1.question("Enter number of lines for the pyramid: ", function(count){

    const rows = [];

    for ( let i = 0 ; i < count ; i++){
        rows.push(padRow(i+1, count));
    }

    console.log(rows.join("\n"));
    r1.close();
});

// This code will run on Terminal
// using :
// node fileName.js