// Função para mostrar/ocultar o botão baseado na rolagem
window.onscroll = function() {
  const button = document.getElementById('scrollTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
};

// Função para rolar até o topo suavemente
document.getElementById('scrollTopBtn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Selecionando os botões e o container de benefícios
const btnScrollLeft = document.querySelector('.btn-scroll-left');
const btnScrollRight = document.querySelector('.btn-scroll-right');
const scrollContainer = document.querySelector('.custom-scroll');

// Função para verificar se há itens para rolar
function checkScrollButtons() {
  // Verifica se o botão à esquerda deve ser mostrado
  if (scrollContainer.scrollLeft > 0) {
    btnScrollLeft.classList.add('show');
  } else {
    btnScrollLeft.classList.remove('show');
  }

  // Verifica se o botão à direita deve ser mostrado
  if (scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth) {
    btnScrollRight.classList.add('show');
  } else {
    btnScrollRight.classList.remove('show');
  }
}

// Função para rolar o conteúdo para a esquerda
btnScrollLeft.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -200, // Rola 200px para a esquerda
    behavior: 'smooth' // Rolagem suave
  });
  checkScrollButtons(); // Atualiza os botões após o clique
});

// Função para rolar o conteúdo para a direita
btnScrollRight.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 200, // Rola 200px para a direita
    behavior: 'smooth' // Rolagem suave
  });
  checkScrollButtons(); // Atualiza os botões após o clique
});

// Verifica a visibilidade dos botões ao carregar a página
checkScrollButtons();

// Adiciona um evento de rolagem para atualizar os botões conforme o usuário rola
scrollContainer.addEventListener('scroll', checkScrollButtons);

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
