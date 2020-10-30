/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
        	return this.firstname + " " + this.lastname;
        }

        set name(fullName) {
        	var res = fullName.split(" ");
        	this.firstname = res[0];
        	this.lastname = res[1];
        }
    }

    document.getElementById("run").addEventListener("click", function() {
    	let person1 = new Person("Doody", "Doo");
    	console.log(person1.name);
    	
    	person1.name = "Yoopi Foo";
    	console.log(person1.name);
    });

})();
