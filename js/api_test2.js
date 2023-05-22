const apiBase = "https://falchhanssen.net";
const blogBase = "/student/ProjectExam1/blog";
const postBase = "/wp-json/wp/v2/posts";
const mediaBase = "/wp-json/wp/v2/media";

const fullPostURL = apiBase + blogBase + postBase + '?_embed';
const fullMediaURL = apiBase + blogBase + mediaBase;

async function getPosts() {
  const response = await fetch(fullPostURL);
  const posts = await response.json();
  console.log(posts);
  console.log(posts[0].id);
  return posts;
}

async function getMedia() {
  const response = await fetch(fullMediaURL);
  const media = await response.json();
  console.log(media);
  return media;
}

function stripString(htmlString) {
  var temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = htmlString;

  var tags = temporaryElement.getElementsByTagName('*');
  for (var i = tags.length - 1; i >= 0; i--) {
    var tag = tags[i];
    if (tag.tagName.toLowerCase() !== 'p') {
      tag.parentNode.removeChild(tag);
    }
  }

  var emptyPTags = temporaryElement.querySelectorAll('p:empty');
  for (var j = 0; j < emptyPTags.length; j++) {
    var emptyPTag = emptyPTags[j];
    emptyPTag.parentNode.removeChild(emptyPTag);
  }

  var strippedString = temporaryElement.textContent.trim();
  return strippedString;
}

function createPostHTML(post, media1) {
  const container = document.querySelector(".card-group");
  const postContainer = document.createElement("div");
  postContainer.classList.add("card-group");
  const strippedString = stripString(post.content.rendered);

  container.innerHTML += `<article class="post"><h2>` + media1.title.rendered + `</h2><img class="photo" src="` + media1.source_url + `" alt="` + media1.alt_text + `"><p class="readmore-text">` + strippedString + `</p><input class="readmore-button" type="checkbox"></article>`;
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
}

main();