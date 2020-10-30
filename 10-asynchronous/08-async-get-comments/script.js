/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {
        // console.log(window.lib.getPosts()); // promise

        window.lib.getPosts().then(async response => {
        	let allPosts = await response;

        	allPosts.forEach(post => {
	            window.lib.getComments(post.id).then(async data => {
	                post.comments = await data;
	            });
	        });

        	console.log(allPosts);
        });
    });

})();
