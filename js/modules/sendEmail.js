const base_URL = "https://api-rest-gt.herokuapp.com";

export default function initForm() {
    const form = document.querySelector('.form-email');
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
        const formData = new FormData(form);
        const assunto = formData.get('assunto');
        const nome = formData.get('nome');
        const email = formData.get('email');
        const mensagem = formData.get('mensagem');

        return { assunto, nome, email, mensagem };
    }

    function handleSubmitEmail(event) {
        event.preventDefault();
        
        const btnForm = document.querySelector('form .btn-form');
        const btnEnvio = document.querySelector('form .btn-envio');

        if (getCookie("_ga")) {
            btnForm.style.display = 'none';
            btnEnvio.classList.toggle('active');
            
            fetch(`${base_URL}/send`, {
                method: "POST",
                body: JSON.stringify(getDataForm()),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'TOKEN': 'MDKDJIJUUU8RUG8RKFEOKFOEFU8EUF83020KF2435Ppdzdx76287zvgvfx16368gt',
                },
            })
            .then(res => {    
                modalSucess.classList.add('active');
                setInterval(() => modalSucess.classList.remove('active'), 3500);
            })
            .catch(error => {
                modalErro.classList.add('active');
                setInterval(() => modalErro.classList.remove('active'), 3500);
            })
            .finally(() => {
                inputs.forEach((item) => item.value = " ")
                btnForm.style.display = 'block';
                btnEnvio.classList.toggle('active');
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
    
    form.addEventListener('submit', handleSubmitEmail);
}

