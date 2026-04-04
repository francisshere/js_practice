num1 = Number(prompt("Enter first number: "));
num2 = Number(prompt("Enter second number: "));
operation = prompt("Enter an operation symbol (+, -, *, /): ");

if ((Number.isNaN(num1) || Number.isNaN(num2))){
    alert("Invalid inputs");
} else {
    switch (operation) {
        case "+":
            result = num1 + num2;
            alert(result);
            break;

        case "-":
            result = num1 - num2;
            alert(result);
            break;

        case "*":
            result = num1 * num2;
            alert(result);
            break;

        case "/":
            result = num1 / num2;
            alert(result);
            break;

        default:
            break;
    }
}

