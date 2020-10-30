/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var targetElement = document.getElementById("target");
    var text = targetElement.innerHTML;
    var textLength = text.length;
    var i = 0;

	targetElement.innerHTML = "";

    function typeWriter() {
		if (i < textLength) {
	    	// let randomDelay = Math.floor(Math.random()*650 + 1);
	    	let randomDelay = getRandomInt(100, 450);

		    targetElement.innerHTML += text.charAt(i);
		    setTimeout(typeWriter, randomDelay);
		    i++;
		}
	}

	typeWriter();
})();

// Returns a random integer between min and max
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
