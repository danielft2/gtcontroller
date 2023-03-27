export default function initDropdown() {
    const btnMobile = document.getElementById('btn-mobile');

    function dropdown(event) {
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.querySelector('.nav');
        const header = document.querySelector('.header');
        nav.classList.toggle('active');
        const navActive = nav.classList.contains('active');
        header.classList.toggle('active');
        event.currentTarget.setAttribute('aria-expanded', navActive);
        if (navActive)
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    btnMobile.addEventListener('click', dropdown);
    btnMobile.addEventListener('touchstart', dropdown);
}


    
