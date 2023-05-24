import testFunction from './carousel2.js';

const apiBase = "https://falchhanssen.net";
const blogBase = "/student/ProjectExam1/blog";
const postBase = "/wp-json/wp/v2/posts";
const mediaBase = "/wp-json/wp/v2/media"

const posts = "";
const post = "";

const fullPostURL = apiBase + blogBase + postBase + '?_embed';
const fullMediaURL = apiBase + blogBase + mediaBase;


async function getPosts() {
    // fetch data from API URL
    const response = await fetch(fullPostURL);

    // access the body data in the array
    const posts = await response.json();

    console.log(posts);
    console.log(posts.id);

    //return the body data
    return posts;
}


async function getMedia() {
    // fetch data from API URL
    const response = await fetch(fullMediaURL);

    // access the body data in the array
    const media = await response.json();

    console.log(media);

    //return the body data
    return media;
}


function createPostHTML(post, media1) {
    const carousel = document.querySelector(".carousel");

    const postContainer = document.createElement("div");
    postContainer.classList.add("card-group");

    const strippedString = post.content.rendered.replace(/(<([^>]+)>)/gi, '').trim();

    console.log('post-id: ', post.id);
    console.log('media-post: ', media1.post);

    carousel.innerHTML += `<a href="details.html?id=` + media1.post + `"><img class="carouselImage" src="` + media1.guid.rendered + `" alt="image of ` + media1.title.rendered + `" data-title="` + media1.title.rendered + `" draggable="false"></a>`;
}

function createPostsHTML(posts, media) {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const media1 = media[i];
        
        createPostHTML(post, media1);
    }
}

async function main() {
    const posts = await getPosts();
    const media = await getMedia();

    createPostsHTML(posts, media);
    testFunction();
}

main();
