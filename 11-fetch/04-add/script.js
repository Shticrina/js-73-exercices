/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function() {
    	let heroName = document.getElementById("hero-name").value;
    	let heroAlterEgo = document.getElementById("hero-alter-ego").value;
    	let heroPowers = document.getElementById("hero-powers").value;
    	heroPowers = heroPowers.replace(/, /g, ",");
    	// console.log(heroPowers);

    	if (heroName != "" && heroAlterEgo != "" && heroPowers != "") {
	    	let data = JSON.stringify({
				"id": null,
				"name": heroName,
				"alterEgo": heroAlterEgo,
				"abilities": heroPowers.split(",")
			});
	    	// console.log(data);

			fetch('http://localhost:3000/heroes', {
				method: "POST", body: data,
				headers: { "Content-type": "application/json; charset=UTF-8" }
			})
			.then(response => response.json())
			.then(data => { console.log(data); })
			.catch(error => { console.error(error);	});
		} else {
			alert("Not empty fields, please!");
		}
    });

})();
