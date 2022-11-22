// menu responsivo

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 3 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  // Scroll Suave para Link Interno

const menuItens = document.querySelectorAll('.menu a[href^="#"]'); // regex para buscar apenas links que comecvem com #, assim o logo pode funcionar, pois no método offsetTop não vai ler (0,0).
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})
const projetosBtn = document.querySelector('.btn');
projetosBtn.addEventListener('click', scrollToIdOnClick);

function scrollToIdOnClick(event) {
    event.preventDefault() //evitar um evento "atualizar a id no url"
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop // método offsetTop dá a coordenada do topo
    
    window.scroll({ //evento aplicado na janela com referencias coordenadas x,y
        top: to,
        behavior: 'smooth' //comportamento do browser
    }); 
}

// scrol para o topo

const voltaTopo = document.querySelector('[data-anima="scroll"]');
window.addEventListener('scroll', irAoTopo) // adicionar o evento na tela e não no elemento

const metadeWindow = window.innerHeight * 6; // innerHeight é metodo para tamanho da tela

function irAoTopo() {
    const topoItem = voltaTopo.getBoundingClientRect().top;// pega a distancia até o topo
    const itemVisivel = topoItem - metadeWindow < 0; // se essa condição for verdadeira ele adicionará a classe

    if(itemVisivel) {
        voltaTopo.classList.add('show-btn')//adiciona classe lá do css
    } else {
        voltaTopo.classList.remove('show-btn')//remove classe lá do css
    }
}

//troca temas

function initThemeSelector() {
    const themeDefault = document.getElementById("themeDefault")
    const themeLight = document.getElementById("themeLight")
    const themeDark = document.getElementById("themeDark")
    // const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetLink");
    const currentTheme = localStorage.getItem("theme") || "default";
  
    function activateTheme(themeName) {
        themeStylesheetLink.setAttribute("href", `css/themes/${themeName}.css`);
       
    }
  
    themeDefault.addEventListener("click", () => {
        activateTheme(themeDefault.value);
        localStorage.setItem("theme", themeDefault.value);
    });
    themeLight.addEventListener("click", () => {
      activateTheme(themeLight.value);
      localStorage.setItem("theme", themeLight.value);
    });
    themeDark.addEventListener("click", () => {
      activateTheme(themeDark.value);
      localStorage.setItem("theme", themeDark.value);
  });
  
  }
  
  initThemeSelector();
  
  
// carrossel

const slides = document.querySelectorAll('[data-js="carrossel-item"]');
const nextBtn = document.querySelector('[data-js="carrossel-btn--next"]');
const prevBtn = document.querySelector('[data-js="carrossel-btn--prev"]');

const lastSlideIndex = slides.length -1;
let currentSlideIndex = 0;
const manipulateSlidesClasses = (correctSlideIndex) => {
    slides.forEach(slide => slide.classList.remove('carrossel-item--visible'))
    slides[currentSlideIndex].classList.add('carrossel-item--visible');
}

nextBtn.addEventListener("click", () => {
    // if (currentSlideIndex === lastSlideIndex) {
    //     currentSlideIndex = 0
    // } else {
    //     currentSlideIndex++ --pós acrementada--
    // }
    const correctSlideIndex = currentSlideIndex === lastSlideIndex //expressão ternária
    ? currentSlideIndex = 0
    : ++currentSlideIndex //pré-acrementada
    
    // slides.forEach(slide => {
    //     slide.classList.remove('carrossel-item--visible');
    //      })
    //      slides[currentSlideIndex].classList.add('carrossel-item--visible');
    manipulateSlidesClasses (correctSlideIndex) // coloquei todo código forEach numa função para ser invocada.
});

prevBtn.addEventListener("click", () => {
   const correctSlideIndex = currentSlideIndex === 0
   ? currentSlideIndex = lastSlideIndex
   : --currentSlideIndex // pré-decrementada
   manipulateSlidesClasses (correctSlideIndex) //forEach encapsulado   
})


