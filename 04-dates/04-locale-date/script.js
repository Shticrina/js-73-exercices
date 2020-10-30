/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // ex: Sunday 28 October 2018, 23h32 //
    var now = new Date();
	const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // 0-6, 1-7
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let result = weekDays[now.getDay()] + " " + now.getDate() + " " + monthNames[now.getMonth()] + " " + now.getFullYear()	+ ", " +  now.getHours() + "h" + now.getMinutes();

    document.getElementById("target").innerHTML = result;
})();
