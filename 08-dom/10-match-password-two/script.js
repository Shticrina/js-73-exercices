/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
    	let password = document.getElementById("pass-one");
    	let confirmPassword = document.getElementById("pass-two");

    	if (password.value == "" || confirmPassword.value == "" || typeof password.value == "undefined" || typeof confirmPassword.value == "undefined" || password.value != confirmPassword.value) {

    		document.querySelectorAll('input').forEach(input => {
		    	input.classList.add("error");
			});
    	} else {
			document.querySelectorAll('input').forEach(input => {
		    	input.classList.remove("error");
			});
    	}
    });

})();
