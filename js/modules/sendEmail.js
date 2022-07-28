const base_URL = "https://api-rest-gt.herokuapp.com";

export default function initForm() {
    const form = document.querySelector('.form-email');
    const inputs = form.querySelectorAll('.campo');

    const modalEnvio = document.querySelectorAll('.modal-form');
    const modalSucess = document.querySelector('.modal-sucess');
    const modalErro = document.querySelector('.modal-erro');
    const closeModal = document.querySelectorAll('.close-modal');

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
        btnForm.style.display = 'none';
        btnEnvio.classList.toggle('active');
        

        fetch(`${base_URL}/send`, {
            method: "POST",
            body: JSON.stringify(getDataForm()),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
        .then(res => {    
            modalSucess.classList.add('active');
            setInterval(() => modalSucess.classList.remove('active'), 2500)
        })
        .catch(error => {
            modalErro.classList.add('active')
            setInterval(() => modalErro.classList.remove('active'), 2500)
        })
        .finally(() => {
            inputs.forEach((item) => item.value = " ")
            btnForm.style.display = 'block';
            btnEnvio.classList.toggle('active');
        })   
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

