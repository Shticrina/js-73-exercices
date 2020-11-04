/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var buttons = document.querySelectorAll("button");
    var stop_part_one = stop_part_two = stop_part_three = stop_part_four = false;

	function stopInput(buttonElement) {
		let currentInput = buttonElement.previousElementSibling;
		let btnId = buttonElement.getAttribute("id");
		let currentInputId = currentInput.getAttribute("id");

		if (currentInputId == "part-one") {
			stop_part_one = true;
			clearInterval(randomInput1);
		} else if (currentInputId == "part-two") {
			stop_part_two = true;
			clearInterval(randomInput2);
		} else if (currentInputId == "part-three") {
			stop_part_three = true;
			clearInterval(randomInput3);
		} else if (currentInputId == "part-four") {
			stop_part_four = true;
			clearInterval(randomInput4);
		}

		// clearInterval(randomInput);
	}

// *****************************************************************************************

	function generateRandomNumber1() {
		let inputElem = document.getElementById("part-one");

		if (!stop_part_one) {
			var minValue = parseInt(inputElem.getAttribute("data-min"));
			var maxValue = parseInt(inputElem.getAttribute("data-max"));

			inputElem.value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
		}

		if (!stop_part_one || !stop_part_two || !stop_part_three || !stop_part_four) {
			document.getElementById("target").innerHTML = "0" + document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value;
		}
    }

    function generateRandomNumber2() {
		let inputElem = document.getElementById("part-two");

		if (!stop_part_two) {
			var minValue = parseInt(inputElem.getAttribute("data-min"));
			var maxValue = parseInt(inputElem.getAttribute("data-max"));
			var randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

			inputElem.value = (randomValue <= 9 ? "0" : "") + randomValue;
		}

		if (!stop_part_one || !stop_part_two || !stop_part_three || !stop_part_four) {
			document.getElementById("target").innerHTML = "0" + document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value;
		}
    }

    function generateRandomNumber3() {
		let inputElem = document.getElementById("part-three");

		if (!stop_part_three) {
			var minValue = parseInt(inputElem.getAttribute("data-min"));
			var maxValue = parseInt(inputElem.getAttribute("data-max"));
			var randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

			inputElem.value = (randomValue <= 9 ? "0" : "") + randomValue;
		}

		if (!stop_part_one || !stop_part_two || !stop_part_three || !stop_part_four) {
			document.getElementById("target").innerHTML = "0" + document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value;
		}
    }

    function generateRandomNumber4() {
		let inputElem = document.getElementById("part-four");

		if (!stop_part_four) {
			var minValue = parseInt(inputElem.getAttribute("data-min"));
			var maxValue = parseInt(inputElem.getAttribute("data-max"));
			var randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

			inputElem.value = (randomValue <= 9 ? "0" : "") + randomValue;
		}

		if (!stop_part_one || !stop_part_two || !stop_part_three || !stop_part_four) {
			document.getElementById("target").innerHTML = "0" + document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value;
		}
    }

// *****************************************************************************************

	/*function generateRandomNumbers() {
		document.querySelectorAll("input").forEach(inputElem => {
			if (inputElem.getAttribute("id") == "part-one" && !stop_part_one ||
				inputElem.getAttribute("id") == "part-two" && !stop_part_two ||
				inputElem.getAttribute("id") == "part-three" && !stop_part_three ||
				inputElem.getAttribute("id") == "part-four" && !stop_part_four) {
				var minValue = parseInt(inputElem.getAttribute("data-min"));
				var maxValue = parseInt(inputElem.getAttribute("data-max"));

				inputElem.value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
			}
		});

		if (!stop_part_one || !stop_part_two || !stop_part_three || !stop_part_four) {
			document.getElementById("target").innerHTML = "0" + document.getElementById("part-one").value + document.getElementById("part-two").value + document.getElementById("part-three").value + document.getElementById("part-four").value;
		}
    }

    var randomInput = setInterval(generateRandomNumbers, 30);*/
    var randomInput1 = setInterval(generateRandomNumber1, 30);
    var randomInput2 = setInterval(generateRandomNumber2, 30);
    var randomInput3 = setInterval(generateRandomNumber3, 30);
    var randomInput4 = setInterval(generateRandomNumber4, 30);

    buttons.forEach(buttonElem => {
        buttonElem.addEventListener("click", function() {
            stopInput(this);
        });
    });

})();
