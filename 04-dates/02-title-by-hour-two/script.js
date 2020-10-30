/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var now = new Date();
    var todayMax = new Date();
    todayMax.setHours(17, 30, 00);
    // var todayMax = new Date('Oct 26, 20 17:30:00');
    
    console.log(now);
    console.log(now.getTime());
    console.log(todayMax);
    console.log(todayMax.getTime());

    if (now.getTime() < todayMax.getTime()) {
    	document.getElementById("target").innerHTML = "Hello!";
    } else {
    	document.getElementById("target").innerHTML = "Good evening!";
    }

})();
