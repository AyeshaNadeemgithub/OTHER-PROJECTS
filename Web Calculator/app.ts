const number1 = document.getElementById('num1') as HTMLInputElement
const number2 = document.getElementById('num2') as HTMLInputElement

const addbutton =  document.getElementById('add') as HTMLButtonElement
const subbutton =  document.getElementById('sub') as HTMLButtonElement
const mulbutton =  document.getElementById('mul') as HTMLButtonElement
const divbutton =  document.getElementById('div') as HTMLButtonElement

const printanswer = document.getElementById('print') as HTMLOutputElement

function addition(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;
    printanswer.textContent = result.toString()
}
addbutton.addEventListener('click',addition)

function subtraction(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;
    printanswer.textContent = result.toString()
}
subbutton.addEventListener('click',subtraction)

function multiplication(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;
    printanswer.textContent = result.toString()
}
mulbutton.addEventListener('click',multiplication)

function division(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a/b;
    printanswer.textContent = result.toString()
}
divbutton.addEventListener('click',division)

