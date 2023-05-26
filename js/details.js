const query = document.location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
const post = id;

const apiBase = "https://falchhanssen.net";
const blogBase = "/student/ProjectExam1/blog";
const postBase = "/wp-json/wp/v2/posts";
const mediaBase = "/wp-json/wp/v2/media";

// const fullPostURL = apiBase + blogBase + postBase + id;
// const fullMediaURL = apiBase + blogBase + mediaBase + post;

console.log('Params: ',params)
console.log('Query: ',query)

const fullPostURL = 'https://falchhanssen.net/student/ProjectExam1/blog/wp-json/wp/v2/posts/' + id;
const fullMediaURL = 'https://falchhanssen.net/student/ProjectExam1/blog/wp-json/wp/v2/media/' + post.post;

async function getDetail() {
  const responsePost = await fetch(fullPostURL);
  const dataPost = await responsePost.json();
  console.log('dataPost: ', dataPost);

  const responseMedia = await fetch(fullMediaURL);
  const dataMedia = await responseMedia.json();
  console.log('dataMedia: ', dataMedia);

  const titleContainer = document.getElementById("titleContainer");
  const dateContainer = document.getElementById("dateContainer");
  const imageContainer = document.getElementById("imageContainer");
  const textContainer = document.getElementById("textContainer");

  titleContainer.innerHTML += `<h1 class="title">${dataPost.title.rendered}</h1>`;
  dateContainer.innerHTML += `<div class="date">${dataPost.date}</div>`;
  imageContainer.innerHTML += `<div class="media">${dataMedia}</div>`;
  textContainer.innerHTML += `<div class="content">${dataPost.content.rendered}</div>`;

  console.log('title: ', dataMedia.title);

  try {
    console.log(dataMedia.title);
  } catch (err) {
    alert(err);
  }

  addModalFunc();
}


function addModalFunc() {
  const imgs = document.querySelectorAll('img');

  console.log({imgs});
  imgs.forEach(element => {
      element.addEventListener('click', function() {
          element.classList.add('modal-animation');
      })
      element.addEventListener('mouseleave', () => {
          element.classList.remove('modal-animation');
      })
  })
}


getDetail();