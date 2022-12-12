
const num1 = Number( prompt("Enter the first number: ") );
const operand = prompt("Enter the operand: ");
const num2 = Number( prompt("Enter the second number: ") );

if (operand === '+') {
    function add(num1, num2) {
        return num1 + num2;
    } 
    const output = add(num1, num2);
        alert(output);
}
else if (operand === '-') {
    function subtract(num1, num2) {
        return num1 - num2;
    } 
    const output = subtract(num1, num2);
        alert(output);
}

else if (operand === '*') {
    const multiply = (num1, num2) => num1 * num2;
    const output = multiply(num1, num2);
    alert(output);
}

else if (operand === '/') {
    const division = (num1, num2) => num1 / num2;
    const output = division(num1, num2);
    alert(output);
}

else if (operand === '%') {
    const modulo = (num1, num2) => num1 % num2;
    const output = modulo(num1, num2);
    alert(output);
}

else {
    alert(`Error: Operands Cannot be Found`);
}
