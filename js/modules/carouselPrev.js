export default function initCarouselPrevidencia() {
    const html = {
        next: document.querySelector('.next'),
        carousel: document.querySelector('.importancia-previdencia-content'),
        itens: document.querySelectorAll('.importancia-item').length,
        initValue: 0,
        count: 0,
    }
    
    html.next.addEventListener('click', () => {
        if (html.count === html.itens - 1) {
            html.initValue = 0;
            html.count = 0;
        } else {
            html.initValue += 100;
            html.count++;
        }
        
        html.carousel.style.transform = `translate3d(-${html.initValue}%, 0, 0)`
    })
}