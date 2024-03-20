document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const operation = document.getElementById("operation").value;
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    let result;

switch (operation) {
        case "addition":
            result = num1 + num2;
            break;
        case "subtraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            result = num1 / num2;
            break;
        default:
            result = "Operação inválida!";
            break;
    }
    
    document.getElementById("result").textContent = `Resultado: ${result}`;
});
