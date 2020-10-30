/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //lastname, firstname, age, city, country
    var person = {
		lastname: "Dinca",
		firstname: "Cristina",
		age: 27,
		city: "Bruxelles",
		country: "Belgium"
	};

	document.getElementById("run").addEventListener("click", function() {
		console.log("I'm " + person.firstname + " " + person.lastname + ", I'm " + 
		person.age + " old :D and I live in " + person.city + ", " + person.country);
    });

})();
