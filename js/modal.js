const imgs = document.querySelectorAll('.img');

console.log({imgs});

imgs.forEach(element => {
    element.addEventListener('click', function() {
        // const modal = document.querySelector('.modal');
        const copyElement = element;
        // const copyElement = element.cloneNode();

        // console.log({element, copyElement});

        // copyElement.offsetLeft = element.offsetLeft;
        copyElement.classList.add('modal-animation');
        // copyElement.style.position = 'absolute';
        // copyElement.style.left = `${element.offsetLeft}px`;
        // copyElement.style.top = '100px';
        // modal.innerHTML ='';
        // modal.appendChild(copyElement);
        // modal.style.display = 'block';
    })
    element.addEventListener('mouseleave', () => {
        element.classList.remove('modal-animation');
    })
})



const modal = document.querySelector('.modal');
modal.addEventListener('click', (event) => {
    modal.style.display = 'none';
})