export default function initNavigation() {
   function TabNavigation() {
      const html = {
         links: document.querySelectorAll('.tab-links button'),
         content: document.querySelectorAll('.tab-content .tab-content-flex'),
         openTab: document.querySelector('[data-open]')
      }

      function hideAllTabContent() {
         html.content.forEach(section => section.style.display = 'none')
      }

      function removeAllActiveClass() {
         html.links.forEach(tab => {
            tab.classList.remove('active');
         })
      }

      function showCurrentTab(id) {
         hideAllTabContent()

         const tabContent = document.querySelector(`#${id}`);
         removeAllActiveClass();
         tabContent.style.display = 'flex';
      }

      function selectTag(event) {
         const target = event.currentTarget;
         showCurrentTab(target.dataset.id)

         target.classList.add('active');
      }

      function listenForChange() {
         html.links.forEach(tab => {
            tab.addEventListener('click', selectTag)
         })
      }

      function initialClick() {
         showCurrentTab(html.openTab.dataset.id)
         html.openTab.classList.add('active');
      }

      function init() {
         hideAllTabContent();
         listenForChange();
         initialClick();
      }

      return {
         init
      }
   }

   window.addEventListener('load', () => {
      const tabNavigation = TabNavigation();
      tabNavigation.init();
   })

}