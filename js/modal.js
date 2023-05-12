
function addModalFunc() {
    const imgs = document.querySelectorAll('.img');

    imgs.forEach(element => {
        element.addEventListener('click', function() {
            element.classList.add('modal-animation');
        })
        element.addEventListener('mouseleave', () => {
            element.classList.remove('modal-animation');
        })
    })
}

addModalFunc();