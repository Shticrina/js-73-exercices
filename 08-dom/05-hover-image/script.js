/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var imgElement = document.getElementsByTagName("img")[0];
    var dataHoverValue = imgElement.getAttribute("data-hover");
    var imgSrcValue = imgElement.getAttribute("src");
    
    // add mouseover event to the image
    imgElement.addEventListener("mouseover", function() {
    	imgElement.setAttribute("src", dataHoverValue);
    });

    // add mouseout event to the image
    imgElement.addEventListener("mouseout", function() {
    	imgElement.setAttribute("src", imgSrcValue);
    });

})();
