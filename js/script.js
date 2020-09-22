if(window.SimpleSlide){  /*Só funciona se o javascrtipt, 
                          estiver/for suportado pelo navegador */
  new SimpleSlide ({
    slide: 'quote', // nome do atributo data-slide="principal"
    nav: false, // se mostra ou não a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
   
  })

  new SimpleSlide ({
    slide: "img-portfolio",
    nav: true,
    auto: true,
    time: 5000,
  })

}

if(window.SimpleAnime) {
  new SimpleAnime({})
}