let inverted = false;

function padRow(rowNumber, rowCount, character){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function generatePyramid(){
    const character = document.getElementById("characterInput").value || "#";
    const count = parseInt(document.getElementById("countInput").value) || 10;

    const rows = [];

    for( let i = 1; i <=count; i++){
        if(inverted){
            rows.unshift(padRow(i, count, character));
        } else {
            rows.push(padRow(i, count, character));
        }
    }

    let result = "";

    for(const row of rows){
        result += row + "\n";
    }

    document.getElementById("output").innerText = result;

    // Enable Invert button after pyramid is generated
    document.getElementById("invertBtn").disabled = false;
}

function toggleInvert(){
    inverted = !inverted;
    generatePyramid();
}