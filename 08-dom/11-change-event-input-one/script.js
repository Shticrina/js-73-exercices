/* becode/javascript * * /06-dom/11-change-event-input-one/script.js - 6.11:
événement change (1) * * coded by leny@BeCode * started at 26/10/2018 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").addEventListener("keyup", function(event) {
    	let counter = this.value.length;
    	// console.log("counter: " + counter);
		// console.log("password: " + this.value);

    	if (counter <= 10) {
			document.getElementById("counter").innerHTML =  counter + "/10";
    	} else {
    		this.classList.add("error"); // active when click outside input 
    		this.disabled = true;
    		// console.log("stop input");
    	}
    });

})();
