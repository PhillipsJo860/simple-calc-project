/* 
Joshua Phillips
4/19/24
Simple Calculator Project
*/


//Input
const num1 = prompt("Please enter the first number.");
const num2 = prompt("Please enter the second number.");

//Process
const add = parseInt(num1) + parseInt(num2);
const sub = parseInt(num1) - parseInt(num2);
const mult = parseInt(num1) * parseInt(num2);
const div = parseInt(num1) / parseInt(num2);

//Output

document.getElementById("addition").innerHTML = `${num1} + ${num2} = ${add}`;
document.getElementById("subtraction").innerHTML = `${num1} - ${num2} = ${sub}`;
document.getElementById("multiplication").innerHTML = `${num1} * ${num2} = ${mult}`;
document.getElementById("division").innerHTML = `${num1} / ${num2} = ${div}`;