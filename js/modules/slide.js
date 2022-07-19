export default function initSlides() {
    const images = document.querySelectorAll('.informacoes-img img');
    let indexImg = 0;
    
    function slideShow() {
        images[indexImg].classList.toggle('visible');
        indexImg == images.length -1 ? indexImg = 0 : indexImg++;
        images[indexImg].classList.toggle('visible');
    }
    
    setInterval(() => {
        slideShow();
    }, 3000)
    
    window.addEventListener("load", slideShow);
}