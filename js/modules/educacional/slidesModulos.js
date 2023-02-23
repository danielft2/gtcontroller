export default function initSlidesModulos() {
   function slidesModulos() {
      function init() {
         const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            loop: true,
            autoplay: {
               delay: 6000,
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

