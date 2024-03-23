const number1 = document.getElementById('num1') as HTMLInputElement
const button = document.getElementById('btn') as HTMLButtonElement
const printvalue = document.getElementById('output') as HTMLOutputElement
const resetvalue = document.getElementById('resetbtn') as HTMLButtonElement
 
function printenteredvalue():void{
const numb1 = parseFloat(number1.value);
printvalue.textContent = numb1.toString();
} 
function resetOutputValue(): void {
    printvalue.textContent = ''; 
    number1.value = '';// Reset the output value
}

button.addEventListener('click', printenteredvalue);
resetvalue.addEventListener('click', resetOutputValue);

