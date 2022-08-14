function cookiesGA4() {  
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("js", new Date());
  
  const USER_ID = Math.floor(Date.now() * Math.random()).toString(36)
  
  gtag("config", "G-PWL1JMM9M6");
  gtag("set", { user_id: USER_ID });

  localStorage.setItem('@idsession', USER_ID);
}

cookiesGA4();