if(window.SimpleSlide){
  new SimpleSlide ({
    slide: 'principal', // nome do atributo data-slide="principal"
    nav: false, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  })

  new SimpleSlide ({
    slide: "img-portfolio",
    nav: true,
    auto: true,
    time: 5000,
  })

}