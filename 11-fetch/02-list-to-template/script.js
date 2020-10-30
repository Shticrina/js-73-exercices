/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*async function getHeroes() {
    let url = 'http://localhost:3000/heroes';

    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}*/

(() => {

	document.getElementById("run").addEventListener("click", function() {
		// console.log(getHeroes());

		fetch('http://localhost:3000/heroes')
		.then(response => response.json())
		.then(data => {
			let heroes = data;
		    var template = document.querySelector("#tpl-hero");
		    // console.log(heroes);

		    heroes.forEach((hero, index) => {
			    var clone = document.importNode(template.content, true); // li
				var strongTags = clone.querySelectorAll("strong");
			    var alterEgosElem = clone.querySelectorAll("em");
				var powersElem = clone.querySelectorAll("p");

	            strongTags[0].innerHTML = heroes[index].name;
	            alterEgosElem[0].innerHTML = heroes[index].alterEgo;
	            powersElem[0].innerHTML = heroes[index].abilities.join(", ");

			    document.getElementById("target").appendChild(clone);
		    });
		})
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error);
		});
    });

})();
