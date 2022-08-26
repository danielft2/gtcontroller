const btn = document.querySelectorAll('.expand');
const teste = document.querySelector('.content-item-hidden')
 
function handleClick(event) {
   const ref = event.target.parentElement.nextElementSibling;
   ref.classList.toggle('active');
}

btn.forEach(btn => {
   btn.addEventListener('click', handleClick);
})