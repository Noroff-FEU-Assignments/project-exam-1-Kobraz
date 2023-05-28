const apiBase = "https://falchhanssen.net";
const blogBase = "/student/ProjectExam1/blog";
const postBase = "/wp-json/wp/v2/posts";
const mediaBase = "/wp-json/wp/v2/media"

const posts = "";
const post = "";

const fullPostURL = apiBase + blogBase + postBase + '?_embed';

async function getPosts() {
    // fetch data from API URL
    const response = await fetch(fullPostURL);

    // access the body data in the array
    const posts = await response.json();

    //return the body data
    return posts;
}

function createPostHTML(post) {
    const container = document.querySelector(".post");

    const postContainer = document.createElement("div");
    postContainer.classList.add("post");
    container.innerHTML += `<h2>Article 1</h2><p class="readmore-text">` + post.content.rendered + `</p><input class="readmore-button" type="checkbox">`;
}

function createPostsHTML(posts) {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        createPostHTML(post);
    }
}

async function main() {
    const posts = await getPosts();

    createPostsHTML(posts);
}

main();
