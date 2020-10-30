/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let mytable = document.createElement("table");
    mytable.style.maxWidth = "100%";
    mytable.style.whiteSpace = "nowrap";
    document.getElementById("target").appendChild(mytable);

    for (var i = 1; i <= 10; i++) {
    	// insert tr into table at the end of the other rows;
    	var row = mytable.insertRow(-1);

    	for (var j = 1; j <= 10; j++) {
    		// insert td at the end of the other cols;
	    	var cell = row.insertCell(-1);
	    	cell.innerHTML = j + "*" + i + " = " + (i*j);

	    	if (j % 2 == 0) {
	    		cell.style.backgroundColor = "beige";
	    	}
	    }
    }

})();