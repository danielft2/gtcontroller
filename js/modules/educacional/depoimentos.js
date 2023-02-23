export default function initDepoimentos() { 
   function initDepoimentos() {
      function init() {
         const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            autoplay: true,
          
   
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
      const depoimentos = initDepoimentos();
      depoimentos.init();
   })
}

