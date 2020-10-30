/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

	document.getElementById("run").addEventListener("click", () => {
        // console.log(window.lib.getPosts()); // promise

        window.lib.getPosts().then(response => {
        	let allPosts = response;

        	allPosts.forEach(post => {
	            window.lib.getComments(post.id).then(data => {
	                post.comments = data;
	            });
	        });

        	console.log(allPosts);
        });
    });

})();
