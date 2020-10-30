/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var pElement = document.getElementById("target");
    var text = pElement.innerHTML;
    var textLength = text.length;

	pElement.innerHTML = "";
	pElement.style.fontSize = "32px";

    for (var i = 0; i < textLength; i++) {
    	// console.log(text.charAt(i));
    	var span = document.createElement("span");
    	var fontSize = 32;

    	if (i <= parseInt(textLength/2)) {
    		if (i <= parseInt(textLength/4)) {
                if (i <= parseInt(textLength/8)) {
                    if (i <= parseInt(textLength/12)) {
                        fontSize -= 2;
                        span.style.fontSize = fontSize + "px";
                        // span.style.color = "pink";
                    }

                    fontSize -= 4;
                    span.style.fontSize = fontSize + "px";
                    // span.style.color = "grey";
                }

    			fontSize -= 6;
    			span.style.fontSize = fontSize + "px";
    			// span.style.color = "red";
    		}

			fontSize -= 8;
    		span.style.fontSize = fontSize + "px";
    	} else { // i > parseInt(textLength/2) = 16
            if (i > parseInt(textLength/2) + 4) { // i > 20
                if (i > parseInt(textLength/2) + 8) {
                    if (i > parseInt(textLength/2) + 12) {
                        fontSize -= 6;
                        span.style.fontSize = fontSize + "px";
                        // span.style.color = "pink";
                    }

                    fontSize -= 4;
                    span.style.fontSize = fontSize + "px";
                    // span.style.color = "grey";
                }

                fontSize -= 2;
                span.style.fontSize = fontSize + "px";
                // span.style.color = "red";
            }
    	}

    	span.innerHTML = text.charAt(i);
    	pElement.appendChild(span);
    }
})();
