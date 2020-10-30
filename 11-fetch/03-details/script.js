/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function() {
    	let heroId = document.getElementById("hero-id").value;

		fetch('http://localhost:3000/heroes/?id=' + heroId, {method: "GET"})
		.then(response => response.json())
		.then(data => {
		    // console.log(data[0]);
			var hero = data[0];
		    var template = document.querySelector("#tpl-hero");

		    var clone = document.importNode(template.content, true);
			var strongTag = clone.querySelectorAll("strong");
		    var alterEgoElem = clone.querySelectorAll("em");
			var powersElem = clone.querySelectorAll("p");

            strongTag[0].innerHTML = hero.name;
            alterEgoElem[0].innerHTML = hero.alterEgo;
            powersElem[0].innerHTML = hero.abilities.join(", ");

		    document.getElementById("target").appendChild(clone);
		})
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error);
		});
    });

})();
