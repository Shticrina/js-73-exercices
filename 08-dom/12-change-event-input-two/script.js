/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").addEventListener("keyup", function(event) {
    	let inputLength = this.value.length;
		// let myregex = /(.*\d){2,}/;
		// console.log("test regex numbers: " + this.value.match(/(.*\d){2,}/));

    	if (inputLength >= 8 && this.value.match(/(.*\d){2,}/) != null) {
			document.getElementById("validity").innerHTML =  "ok";
    	} else {
			document.getElementById("validity").innerHTML =  "not ok";
    	}
    });

})();
