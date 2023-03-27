export default function initTabsApps() {
    function tabsApps() {
        const html = {
            links: document.querySelectorAll('.tab-links-aplicativos button'),
            imgs: document.querySelectorAll('.educacional-aplicativos-rigth-animation'),
            content: document.querySelectorAll('.tab-content .tab-content-app'),
            openTab: document.querySelector('[data-open]')
        }
        
        function hideAllTabContent(){
            html.content.forEach(section => section.style.display = 'none')
            html.imgs.forEach(img => img.style.display = 'none')
        }
    
        function removeAllActiveClass(){
            html.links.forEach(tab => {
                tab.classList.remove('active');
            })
        }
    
        function showCurrentTab(id){
            hideAllTabContent()
    
            const tabsContent = document.querySelectorAll(`.${id}`);
            tabsContent.forEach((item) => {
                item.style.display = 'block';
            })
            removeAllActiveClass(); 
        }
    
        function selectTag(event){
            const target = event.currentTarget;
            showCurrentTab(target.dataset.id)
    
            target.classList.add('active');
        }
    
        function listenForChange(){
            html.links.forEach(tab => {
                tab.addEventListener('click', selectTag)
            })
        }
    
        function initialClick() {
            showCurrentTab(html.openTab.dataset.id)
            html.openTab.classList.add('active');
        }
    
        function init(){
            hideAllTabContent();
            listenForChange();
            initialClick();
        }
    
        return {
            init
        }
    }
    
    window.addEventListener('load', () => {
        const tabNavigation = tabsApps();
        tabNavigation.init();
    })
}

