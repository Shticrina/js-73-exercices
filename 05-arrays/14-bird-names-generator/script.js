/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];

    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", function() {
        let length = birds.length;
        let randomBird = Math.floor(Math.random() * length);
        let adjectivesArray = Array.from(adjectives);
        // console.log(adjectives.values().next().value);
        // console.log(adjectivesArray);
        // console.log(birds[randomBird].name);
        // console.log(adjectives[randomBird]);
        // console.log(adjectives.values()); // interator
        // for (let item of adjectives) console.log(item);

        let result = "Sorry! No adjective available for that bird!";

        if (adjectives.has(adjectivesArray[randomBird])) {
            result = (birds[randomBird].fem ? "La " : "Le ") + birds[randomBird].name
                + " " + adjectivesArray[randomBird] + (birds[randomBird].fem ? "e" : "");
        }

        document.getElementById("target").innerHTML = result;
    });

})(); 