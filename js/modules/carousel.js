const carrosel = document.querySelector('.parceiros-items');
const marcadores = document.querySelectorAll('.parceiros-marcadores div');

let indexImage = 0;
let distancia = -250
let valorInical = distancia;
let pararSlide = false;

function playSlide() {
    if (indexImage == 12) {
        marcadores[indexImage].classList.remove('active');
        carrosel.style.transform = `translate3d(0%, 0px, 0px)`;

        indexImage = 0;
        distancia = valorInical;
        
        marcadores[indexImage].classList.add('active');
    } else {
        marcadores[indexImage].classList.remove('active');
        carrosel.style.transform = `translate3d(${distancia}px, 0px, 0px)`;
        
        indexImage++;
        distancia = (distancia + valorInical);
        
        marcadores[indexImage].classList.add('active');
    }   
}

function mudaSlide(value) {
    pararSlide = true;
    
    marcadores[indexImage].classList.remove('active');
    marcadores[value].classList.add('active');
    indexImage = value;
    
    distancia = valorInical * value;
    carrosel.style.transform = `translate3d(${distancia}px, 0px, 0px)`;

    setTimeout(() => {
        pararSlide = false;
        distancia = (distancia + valorInical);
    }, 1000)
}

function rodarSlide() {
    setInterval(() => {
        if (!pararSlide)
            playSlide();
    }, 3000)
}

window.addEventListener("load", rodarSlide);

