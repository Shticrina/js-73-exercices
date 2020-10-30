/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    do {
	    var age = parseInt(prompt("Your age:"));
	    var gender = prompt("Gender:");
	    var town = prompt("The town where you live:");

	    // validations

	    var response = "Age: " + age + "\nGender: " + gender + "\nTown: " + town;

	} while(!confirm(response));

})();
