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
  }

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
  
  if (getCookie("_ga")) {
    cookies.classList.remove('active');
    cookiesGA4();
  } 

  btnCookies.addEventListener('click', cookiesGA4);
}

initCookiesGA4();




