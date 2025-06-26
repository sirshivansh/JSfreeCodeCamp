let rows = [];
const count = 8;
const character = "#";
function padRow( rowNumber, rowCount ){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//for Loop
for ( let i = 0; i < count; i++){
    rows.push(padRow(i + 1, count));
}
console.log(rows.join("\n")); //.join("\n") combines array items line-by-line