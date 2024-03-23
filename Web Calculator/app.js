const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const addbutton = document.getElementById('add');
const subbutton = document.getElementById('sub');
const mulbutton = document.getElementById('mul');
const divbutton = document.getElementById('div');
const printanswer = document.getElementById('print');
function addition() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printanswer.textContent = result.toString();
}
addbutton.addEventListener('click', addition);
function subtraction() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a - b;
    printanswer.textContent = result.toString();
}
subbutton.addEventListener('click', subtraction);
function multiplication() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a * b;
    printanswer.textContent = result.toString();
}
mulbutton.addEventListener('click', multiplication);
function division() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a / b;
    printanswer.textContent = result.toString();
}
divbutton.addEventListener('click', division);
export {};
