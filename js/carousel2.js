function test() {
    const carousel = document.querySelector(".carousel");
    let firstImg = carousel.querySelectorAll("img")[0];
    
    console.log('First image: ',{firstImg});
    
    let arrowIcons = document.querySelectorAll(".wrapper i");
    
    let isDragStart = false, prevPageX, prevScrollLeft;
    
    
    
    
    const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }
    
    arrowIcons.forEach(icon => {
        firstImg = carousel.querySelectorAll("img")[0];
        icon.addEventListener("click", () => {
            console.log('click event: ',{firstImg});
            let firstImgWidth = firstImg.clientWidth + 14;
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
        });
    });
    
    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }
    
    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        carousel.classList.add("dragging");
        let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }
    
    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
    }
    
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);
    
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("touchend", dragStop);
}

export default test;