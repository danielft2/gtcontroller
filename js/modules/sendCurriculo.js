const base_URL = "https://api-rest-gt.herokuapp.com"

export default function initSendCurriculo() {
    const form = document.querySelector('.form-curriculo');
    const inputs = form.querySelectorAll('.campo');

    const modalEnvio = document.querySelectorAll('.modal-form');
    const modalSucess = document.querySelector('.modal-sucess');
    const modalErro = document.querySelector('.modal-erro');
    const closeModal = document.querySelectorAll('.close-modal');

    function getCookie(nome) {
        var nomeCookie = nome + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nomeCookie) == 0) return c.substring(nomeCookie.length,c.length);
        }
    
        return null;
    }

    function getDataForm() {
        const data = new FormData(form);
        const file = document.getElementById('Curriculo');
        data.append('file', file.files);

        return data;
    }
    
    function handleSubmitCurriculo(event) {
        event.preventDefault();
        const btnForm = form.querySelector('.btn-curriculo');
        const btnEnvio = document.querySelector('form .btn-envio');

        if (getCookie("_ga")) {
            btnForm.style.display = 'none';
            btnEnvio.classList.toggle('active');
    
            fetch(`${base_URL}/sendCurriculo`, {
                method: "POST",
                body: getDataForm(),
            })
            .then(res => {    
                modalSucess.classList.add('active');
                setInterval(() => modalSucess.classList.remove('active'), 3500)
            })
            .catch(error => {
                modalErro.classList.add('active')
                setInterval(() => modalErro.classList.remove('active'), 3500)
            })
            .finally(() => {    
                btnForm.style.display = 'block';
                btnEnvio.classList.toggle('active');
                inputs.forEach(item => item.value = " ");
            })
        }    
    }
    
    closeModal.forEach((item) => {
        item.addEventListener('click', () => {
            modalEnvio.forEach((item) => {
                item.classList.remove('active');
            })       
        })
    })

    form.addEventListener('submit', handleSubmitCurriculo);
}