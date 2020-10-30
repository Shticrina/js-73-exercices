/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var getPostsWithComments = (error, allPosts) => {
        allPosts.forEach(post => {
            window.lib.getComments(post.id, (error, comments) => {
                post.comments = comments;
            });
        });

        console.log(allPosts);
    }

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(getPostsWithComments, 1000);
    });

})();

