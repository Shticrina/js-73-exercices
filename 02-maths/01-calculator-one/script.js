/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("addition").addEventListener("click", function() {
        let result = calculate("op-one", "op-two", "+");
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let result = calculate("op-one", "op-two", "-");
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let result = calculate("op-one", "op-two", "*");
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        let result = calculate("op-one", "op-two", "/");
        alert(result);
    });

})();

function calculate(input1Id, input2Id, operator) {
    let result = "";
    let inputValue1 = parseInt(document.getElementById("op-one").value);
    let inputValue2 = parseInt(document.getElementById("op-two").value);
    let operators = ["+", "-", "*", "/"];

    if (operators.includes(operator)) {
        switch (operator) {
            case "+":
                result = inputValue1 + inputValue2;
                break;
            case "-":
                result = inputValue1 - inputValue2;
                break;
            case "*":
                result = inputValue1 * inputValue2;
                break;
            default:
                result = inputValue1 / inputValue2;
        }
    }

    return result;
}
