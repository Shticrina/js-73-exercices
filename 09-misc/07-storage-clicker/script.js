/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	let counter = 0;

    document.getElementById("increment").addEventListener("click", function() {
		counter++;
		document.getElementById("target").innerHTML = counter;

		// Store the counter to the local storage
		localStorage.setItem("counter", counter);
    });

    document.getElementById("reset").addEventListener("click", function() {
		counter = 0;
		document.getElementById("target").innerHTML = counter;
		localStorage.setItem("counter", counter);
    });

	// Retrieve the counter value from local storage
    document.getElementById("target").innerHTML = localStorage.getItem("counter");

})();
