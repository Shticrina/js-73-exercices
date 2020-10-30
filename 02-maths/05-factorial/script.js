/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let inputNumber = parseInt(document.getElementById("number").value);
        alert("The factorial number for " + inputNumber + " is: " + factorial(inputNumber));
    });

})();

/**
 * Function which returns the factorial of a number
 * @param {number} a - a number
 * @return {number} - the factorial of the number
 */
function factorial(a) {
	if (a != 0 && a != 1) {
		return a * factorial(a-1);
	} else if (a == 1) {
		return 1;
	} else {
		return 0;
	}
}
