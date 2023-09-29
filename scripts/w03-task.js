/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    //call add function and assign it to "sum"
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2; 
} 

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);



/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
    let divideNumbers1 = Number(document.querySelector("#dividend").value);
    let divideNumbers2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumbers1, divideNumbers2);

}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let date = new Date().getDate();
currentYear = date.getFullYear();
document.querySelector("year").innerHTML = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').innerHTML = myArray;
/* Output Odds Only Array */
let odds = myArray.filter(x => x % 2 != 0);
document.querySelector("#odds").innerHTML = odds;

/* Output Evens Only Array */
let even = myArray.filter(x => x % 2 === 0);
document.querySelector("#evens").innerHTML = even;

/* Output Sum of Org. Array */
let sumArray = myArray.reduce((sum, item) => sum + item);
document.querySelector("#sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let double = myArray.map(x => x * 2);
document.querySelector("#multiplied").innerHTML = double;

/* Output Sum of Multiplied by 2 Array */
let productArray = double.reduce((sum, item) => sum + item);
document.querySelector("#sumOfMultiplied").innerHTML = productArray;
