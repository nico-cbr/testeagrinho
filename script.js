const hamburguerEl = document.querySelector('.hamburguer');
const navEl = document.querySelector('.nav') // para buscar uma classe precisamos do ponto na frente

hamburguerEl.addEventListener('click', ()=>{
    navEl.classList.toggle('navOpen');
    hamburguerEl.classList.toggle('hamburguerOpen'); //para acrescentar uma classe não podemos colocar PONTO no inicio
});