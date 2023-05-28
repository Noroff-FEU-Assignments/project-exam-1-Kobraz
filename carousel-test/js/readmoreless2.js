const parentContainer = document.querySelector('.readmore-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('readmore-button');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.readmore-text');

    currentText.classList.toggle('readmore-text--show');

    current.textContent = current.textContent.includes('Read more') ?
    "Read Less..." : "Read More..."

})