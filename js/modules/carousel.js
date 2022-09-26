const carrosel = document.querySelector('.parceiros-items');
const marcadores = document.querySelectorAll('.parceiros-marcadores div');

let indexImage = 0;
let distancia = -250
let valorInical = distancia;
let pararSlide = false;
let parceirosQtd = 0;

async function getParceiros() {
    const res = await fetch('./data/parceiros.json');
    const parceiros = await res.json();
    parceirosQtd = parceiros.length;

    parceiros.forEach(parceiro => {
        const img = document.createElement('img');
        img.src = parceiro.image_url;
        img.setAttribute('alt', parceiro.alt);
        img.classList.add('parceiros-item')

        carrosel.appendChild(img);
    })
}

function playSlide() {
    if (indexImage == parceirosQtd - 4) {
        //marcadores[indexImage].classList.remove('active');
        carrosel.style.transform = `translate3d(0%, 0px, 0px)`;

        indexImage = 0;
        distancia = valorInical;
        
        //marcadores[indexImage].classList.add('active');
    } else {
        //marcadores[indexImage].classList.remove('active');
        carrosel.style.transform = `translate3d(${distancia}px, 0px, 0px)`;
        
        indexImage++;
        distancia = (distancia + valorInical);
        
        //marcadores[indexImage].classList.add('active');
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

async function rodarSlide() {
    await getParceiros();
    setInterval(() => {
        if (!pararSlide)
            playSlide();
    }, 2000)
}

window.addEventListener("load", rodarSlide);