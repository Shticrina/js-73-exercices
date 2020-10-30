/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let sectionMaterial = document.createElement("section");
	let divField = document.createElement("div");
	let label = document.createElement("label");
	let input = document.createElement("input");
	let divActions = document.createElement("div");
	let button = document.createElement("button");

	sectionMaterial.classList.add("material");
	sectionMaterial.setAttribute("id", "myInput");

	divField.classList.add("field", "with-indicator");
	divField.style.textAlign = "center";
	divField.style.width = "50%";

	label.setAttribute("for", "guess");
	label.style.fontSize = "2rem";
	label.innerHTML = "Guess the number between 1 and 100:";

	input.setAttribute("type", "text");
	input.setAttribute("name", "guess");
	input.setAttribute("id", "guess");
	input.style.margin = "1rem";

	divActions.classList.add("actions");

	button.setAttribute("type", "button");
	button.setAttribute("id", "run");
	button.innerHTML = "Try";

	divField.appendChild(label);
	divField.appendChild(input);
	divActions.appendChild(button);
	sectionMaterial.appendChild(divField);
	sectionMaterial.appendChild(divActions);

	document.getElementsByClassName("content")[0].appendChild(sectionMaterial);
	let counter = 1;
	let random_nb = Math.floor(Math.random() * 100) + 1;
	console.log(random_nb);

	document.getElementById("run").addEventListener("click", function() {
		user_input = document.getElementById("guess").value;

		if (user_input < random_nb) {
			alert("Higher!");
			counter++;
		} else if (user_input > random_nb) {
			alert("Lower!");
			counter++;
		} else {
			alert("You needed " + counter + " guesses.");
		}
    });

})();
