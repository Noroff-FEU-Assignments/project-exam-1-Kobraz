

async function fetchData() {
    try {
    const url = 'https://falchhanssen.net/student/ProjectExam1/blog/wp-json/wp/v2/posts';
    const response = await fetch(url);
    const data =await response.json();
    return data;
    } catch(error) {
        return error;
    }
}

async function renderHTML() {
    const data = await fetchData();
    const wrapper = document.querySelector('.flex-wrapper');
    data.forEach(element => {
        wrapper.innerHTML += element.content.rendered;
    })

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


renderHTML();