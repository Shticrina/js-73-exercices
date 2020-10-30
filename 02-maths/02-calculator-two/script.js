/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const performOperation = operation => {
        // console.log(operation);
        let inputValue1 = parseInt(document.getElementById("op-one").value);
        let inputValue2 = parseInt(document.getElementById("op-two").value);

        switch (operation) {
            case "addition":
                alert(inputValue1 + inputValue2);
                break;
            case "substraction":
                alert(inputValue1 - inputValue2);
                break;
            case "multiplication":
                alert(inputValue1 * inputValue2);
                break;
            default:
                alert(inputValue1 / inputValue2);
        }
    };

    // alert(performOperation);

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
