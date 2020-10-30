/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
    	
    	if (password.value == "" || confirmPassword.value == "" ||
    		typeof password.value == "undefined" || typeof confirmPassword.value == "undefined" ||
    		password.value != confirmPassword.value) {

    		document.querySelectorAll('input').forEach(input => {
		    	console.log('input: ', input);
		    	input.style.border = "1px solid red";
			});
    		/*password.style.border = "1px solid red";
    		confirmPassword.style.border = "1px solid red";*/
    	} else {
			document.querySelectorAll('input').forEach(input => {
		    	console.log('input: ', input);
		    	input.style.border = "1px solid black";
			});
    		/*password.style.border = "1px solid black";
			confirmPassword.style.border = "1px solid black";*/
    	}
    });

})();
