window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    showNavOnScroll()
    showbackToTopButtonOnScroll()


    activateMenuAtCurrentSection(home)
   // activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section){

    // Linha alvo

    const targetLine = scrollY + innerHeight / 2 
    // verificar se a secao passou da linha
    //  Quais dados vou precisar 
   
    // O topo da secao
   const sectionTop = section.offsetTop

   // Altura da secao
   const sectionHeight = section.offsetHeight
 
   // O topo da secao chegou ou utrapassou  a linha alvo
   const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


   // Informações dos dados e da lógica
   console.log('O topo da secao chegou ou passou a linha?',sectionTopReachOrPassedTargetLine)

   // verificar  se  a bse está abaixo da linha alvo
   // Quais dados q vou precisar

  // a secao termina onde

  const  sectionEndsAt =  sectionTop + sectionHeight 

  // O final da secao passou na linha alvo

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log( ' O fundo da secao passou da linha?', sectionEndPassedTargetLine)
  
  // limite da secão

  const sectionBoundaries = 
  sectionTopReachOrPassedTargetLine &&  !sectionEndPassedTargetLine

 
  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  if (sectionBoundaries) {
      menuElement.classList.add('active')
      
  }
  

 
 
   
}

function showNavOnScroll(){
    if (scrollY>0) {
        navigation.classList.add('scroll')
        
    } else {
        navigation.classList.remove('scroll')
    }

}

function showbackToTopButtonOnScroll(){
    console.log(scrollY)
    if (scrollY>600) {
        backToTopButton.classList.add('show')
        
    } else {
        backToTopButton.classList.remove('show')
        
    }

}

function openmenu(){
    document.body.classList.add('menu-expanded')
}

function closemenu(){
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,

}).reveal('#home,#home img,#home .starts,#services,#services header, #Services .card,#about,#about header,#about .content')