const number1 = document.getElementById('num1');
const button = document.getElementById('btn');
const printvalue = document.getElementById('output');
const resetvalue = document.getElementById('resetbtn');
function printenteredvalue() {
    const numb1 = parseFloat(number1.value);
    printvalue.textContent = numb1.toString();
}
function resetOutputValue() {
    printvalue.textContent = '';
    number1.value = ''; // Reset the output value
}
button.addEventListener('click', printenteredvalue);
resetvalue.addEventListener('click', resetOutputValue);
export {};
