export default function initSlidesModulos() {
   function slidesModulos() {
      function init() {
         const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            loop: true,
            autoplay: {
               delay: 5000,
            },

            navigation: {
               nextEl: '.button-next',
               prevEl: '.button-prev',
            },
         });
      }

      return {
         init
      }
   }
   
   window.addEventListener('load', () => {
      const initSlidesModulos = slidesModulos();
      initSlidesModulos.init();
   })
}

