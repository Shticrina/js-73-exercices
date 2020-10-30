/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function() {
        // uniqueValuesArray = fruits.filter((value, index, self) => self.indexOf(value) === index);

        let uniqueValuesArray = [];
        let fruitsLength = fruits.length;

        for (var i = 0; i < fruitsLength; i++) {
            if (uniqueValuesArray.indexOf(fruits[i]) === -1) {
                uniqueValuesArray.push(fruits[i]);
            }
        }

        // console.log(fruits);
        console.log(uniqueValuesArray);
    });

})();
