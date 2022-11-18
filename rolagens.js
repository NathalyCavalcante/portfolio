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