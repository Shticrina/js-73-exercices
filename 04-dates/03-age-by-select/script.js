/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	/*document.getElementById("run").addEventListener("click", function() {
        let day=document.getElementById("dob-day").value;
        let month=document.getElementById("dob-month").value;
        let year=document.getElementById("dob-year").value;

        console.log(day+ "/" +month + "/" +year);
        let today = new Date();
        let age = today.getFullYear()-year; // today.getFullYear = l'année en cours moins l'année entrée par l'utilisateur(year)
        console.log(age);

    });*/

    document.getElementById("run").addEventListener("click", function() {
	    let dayValue = document.getElementById("dob-day").value;
	    let monthValue = document.getElementById("dob-month").value;
	    let yearValue = document.getElementById("dob-year").value;

	    var today = new Date();
	    var birthDate = new Date(yearValue, monthValue-1, dayValue);
	    var age = 0;

	    let currentYear = today.getFullYear();
	    let userYear = birthDate.getFullYear();
	    let diffMonths = today.getMonth() - birthDate.getMonth();

	    // if (currentYear > userYear) {
	    	age = currentYear - userYear;

	    	if (diffMonths < 0 || (diffMonths === 0 && today.getDate() < birthDate.getDate())) {
		        age--;
		    }
	    // }

    	alert("You are " + age + " years old.");
    });

})();
