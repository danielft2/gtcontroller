function initCookiesGA4() {
  const cookies = document.querySelector('.cookies')
  const btnCookies = document.querySelector('.btn-cookies')

  function cookiesGA4() {  
    cookies.classList.remove('active');
  
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
  
    gtag("js", new Date());
    gtag("config", "G-PWL1JMM9M6");
    
    const USER_ID = Math.floor(Date.now() * Math.random()).toString(36);
    gtag("set", { user_id: USER_ID });
    localStorage.setItem('@idsession', USER_ID);
  }

  if(localStorage.getItem('@idsession')) {
    cookies.classList.remove('active');
  }

  btnCookies.addEventListener('click', cookiesGA4);
}

initCookiesGA4();




