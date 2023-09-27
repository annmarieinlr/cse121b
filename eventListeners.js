const buttonElement = document.getElementById("submitButton");

function copyInput() {//took event out of function imput
    //console.log(event); Worked without this. Why?
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");

    outputElement.innerHTML = inputElement.value; 
}

buttonElement.addEventListener("click", copyInput);

//next lesson
const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e.code);
}