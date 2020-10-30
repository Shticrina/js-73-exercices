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

	var targetElem = document.getElementById("target");
	var targetElemText = targetElem.innerHTML;
	targetElemText = targetElemText.replace("+", "0");

	function replaceString(buttonText, part) {
		var oldValue = parseInt(buttonText);
		var partToBeReplaced = "";
		let replacingWith = "";

		if (part == "one") {
			partToBeReplaced = targetElemText.slice(1, 4);
		} else if (part == "two") {
			partToBeReplaced = targetElemText.slice(4, 6);
		} else if (part == "three") {
			partToBeReplaced = targetElemText.slice(7, 9);
		} else if (part == "four") {
			partToBeReplaced = targetElemText.slice(10, 11);
		}
		console.log("partToBeReplaced: " + partToBeReplaced);

		buttonText = ++oldValue;
		document.getElementById("part-" + part).innerHTML = buttonText;
		// let replacingWith = "0" + buttonText;

		replacingWith = (part != "one" && oldValue < 9 ? "0" : "") + buttonText;
		console.log("replacingWith: " + replacingWith);
		
		targetElemText = targetElemText.replace(partToBeReplaced, replacingWith); // replace data

		targetElem.innerHTML = targetElemText;
		console.log("str: " + targetElem.innerHTML);
		console.log("---------------------");
	}

    document.getElementById("part-one").addEventListener("click", function() {
    	replaceString(this.innerHTML, "one");
		/*var oldValue = parseInt(this.innerHTML);

    	this.innerHTML = ++oldValue;
    	partOne = "0" + this.innerHTML;

		let res = targetElemText.replace(targetElemText.slice(0, 4), partOne); // replace data
    	targetElem.innerHTML = res;*/
	});

	document.getElementById("part-two").addEventListener("click", function() {
		replaceString(this.innerHTML, "two");
		/*var oldValue = parseInt(this.innerHTML);

    	this.innerHTML = (oldValue < 9 ? "0" : "") + (++oldValue);
    	partTwo = this.innerHTML; 

    	let res = targetElemText.replace(targetElemText.slice(5, 7), partTwo); // replace data
    	targetElem.innerHTML = res;*/
	});

	document.getElementById("part-three").addEventListener("click", function() {
		replaceString(this.innerHTML, "three");
		/*var oldValue = parseInt(this.innerHTML);

    	this.innerHTML = (oldValue < 9 ? "0" : "") + (++oldValue);
    	partThree = this.innerHTML;

    	console.log(targetElemText);

    	let res = targetElemText.replace(targetElemText.slice(8, 10), partThree); // replace data
    	targetElem.innerHTML = res;*/
	});

	document.getElementById("part-four").addEventListener("click", function() {
		replaceString(this.innerHTML, "four");
		/*var oldValue = parseInt(this.innerHTML);

    	this.innerHTML = (oldValue < 9 ? "0" : "") + (++oldValue);
    	partFour = parseInt(this.innerHTML);*/
		// partFour.innerHTML += this.innerHTML;
	});

	// console.log("str: " + targetElem.innerHTML);

})();