// Any code after the return statement will not run
function padRow(name){
    const test = "Testing";
    console.log("This Works!");
    return test;
    console.log("This does not works!"); // this is greyed out
}
padRow();