/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*function getSpookyFridays(year) {
	var result = [];

	for (var month = 0; month < 12; month++) {
   		var newDate = new Date(year, month, 13); 

        if (newDate.getDay() == 5) {
          	result.push(monthNames[newDate.getMonth()]);
        }
    }

    return result;
}*/

	  	
(function() {

	document.getElementById("run").addEventListener("click", function() {
		const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var inputYear = document.getElementById("year").value; //1987
		var result = [];

		// result = getSpookyFridays(inputYear);

	    for (var month = 0; month < 12; month++) {
			var newDate = new Date(inputYear, month, 13); 
	    	// month = 0 => 1987, january, 13 
	    	// month = 1 => 1987, february, 13 
	    	// month = 2 => 1987, march, 13 
	    	// month = 3 => 1987, april, 13 
	    	// month = 4 => 1987, may, 13 
	    	// ...
	    	// month = 11 => 1987, december, 13 


			// console.log(newDate.getDay()); // 1 - 7 (le jour de la semaine)

	        if (newDate.getDay() == 5) {
	          	result.push(monthNames[newDate.getMonth()]);
	          	// result.push(monthNames[newDate.getMonth()] + " " + newDate.getFullYear() + " has a Friday 13th.");
	        }
	    }

	    alert(result);
	    // alert(result.join("\n"));
	});
})();
