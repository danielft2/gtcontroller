export default function initAnimation() {
    const anime = document.querySelectorAll('[data-anime]');
    const animeClass = 'anime';
    
    function reveal() {
        const windowTop = window.pageYOffset + (window.innerHeight * 0.90);
        anime.forEach(function(elemento, i) {
            if ((windowTop) > elemento.offsetTop) {
                setTimeout(() => {
                    elemento.classList.add(animeClass);
                }, 20 * i)
            }
        })
    }
    
    window.addEventListener('scroll', function() {
        reveal();
    })
    
    window.addEventListener('load', function() {
        reveal();
    })
}