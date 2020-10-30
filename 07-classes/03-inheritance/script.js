/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

	class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
    	name = "Pouff";
    	static greeting = "Mieowww";
    }

    class Dog extends Animal {
    	name = "Bingo";
    	static greeting = "Woofy";
    }

    document.getElementById("run").addEventListener("click", function() {
    	let cat = new Cat();
    	let dog = new Dog();
    	// console.log(cat);
    	// console.log(dog);

    	console.log(cat.sayHello());
    	console.log(dog.sayHello());
    });
})();
