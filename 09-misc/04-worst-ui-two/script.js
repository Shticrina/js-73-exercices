/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

	function changeString(buttonElem) {
        var id = buttonElem.getAttribute("id");
        var oldValue = parseInt(buttonElem.innerHTML);
        var part1 = document.getElementById("part-one");
        var part2 = document.getElementById("part-two");
        var part3 = document.getElementById("part-three");
        var part4 = document.getElementById("part-four");

        buttonElem.innerHTML = (buttonElem != part1 && oldValue < 9 ? "0" : "") + (++oldValue);
        document.getElementById("target").innerHTML = "0" + part1.innerHTML + part2.innerHTML + part3.innerHTML + part4.innerHTML;

        // var targetElemText = document.getElementById("target").innerHTML;
        // var partToBeReplaced = "";
        // var replacingWith = "";

        /*if (id == "part-one") {
            partToBeReplaced = targetElemText.slice(1, 4);
        } else if (id == "part-two") {
            partToBeReplaced = targetElemText.slice(4, 6);
        } else if (id == "part-three") {
            partToBeReplaced = targetElemText.slice(6, 8);
        } else if (id == "part-four") {
            partToBeReplaced = targetElemText.slice(8, 10);
        }

        replacingWith = (id != "part-one" && oldValue <= 9 ? "0" : "") + (++oldValue);
        document.getElementById(id).innerHTML = replacingWith; // ok

        // Here it replaces all 07 in the string
        targetElemText = targetElemText.replace(partToBeReplaced, replacingWith); // replace data
        document.getElementById("target").innerHTML = targetElemText;*/
    }

    var buttons = document.querySelectorAll("button");

    buttons.forEach(buttonElem => {
        buttonElem.addEventListener("click", function() {
            changeString(this);
        });
    });

})();