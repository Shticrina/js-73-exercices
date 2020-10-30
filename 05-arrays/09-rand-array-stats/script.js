/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
    	let randomNumbers = [];

    	for (var i = 0; i < 10; i++) {
    		randomNumbers.push(Math.floor(Math.random()*100+1));
    	}

    	for (var i = 0; i < 10; i++) {
    		let tdElement = document.getElementById("n-" + (i+1));
    		tdElement.innerHTML = randomNumbers[i];
    	}

		document.getElementById("min").innerHTML = min(randomNumbers);
		document.getElementById("max").innerHTML = max(randomNumbers);
		document.getElementById("sum").innerHTML = sum(randomNumbers);
		document.getElementById("average").innerHTML = sum(randomNumbers) / 10;
    });

})();

/**
 * Function that takes an array of numbers as argument and returns the minimum of the values
 * @param {array} arr - array of numbers
 * @return {number} min - the minimum of array's values
 */
function min(arr) {
	let min = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	return min;
}

/**
 * Function that takes an array of numbers as argument and returns the maximum of the values
 * @param {array} arr - array of numbers
 * @return {number} max - the maximum of array values
 */
function max(arr) {
	let max = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
}

/**
 * Function that calculates the sum of the array values
 * @param {array} arr - array of numbers
 * @return {number} sum - the sum of the array values
 */
function sum(arr) {
	let sum = 0;

	arr.forEach(element => sum += element);

	return sum;
}