// Função para mostrar/ocultar o botão baseado na rolagem
window.onscroll = function() {
  const button = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
};

// Inicialize as animações Lottie
let lottiePlayers = [];

lottiePlayers[1] = lottie.loadAnimation({
  container: document.getElementById("anim-profile"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "src/assets/animations/profiles.json" // Atualize com o caminho correto
});

lottiePlayers[2] = lottie.loadAnimation({
  container: document.getElementById("anim-exam"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "src/assets/animations/exam.json" // Atualize com o caminho correto
});

lottiePlayers[3] = lottie.loadAnimation({
  container: document.getElementById("anim-notifications"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "src/assets/animations/notification.json" // Atualize com o caminho correto
});

lottiePlayers[4] = lottie.loadAnimation({
  container: document.getElementById("anim-auditor"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "src/assets/animations/audit.json" // Atualize com o caminho correto
});

lottiePlayers[5] = lottie.loadAnimation({
  container: document.getElementById("anim-activity"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "src/assets/animations/activity.json" // Atualize com o caminho correto
});

lottiePlayers[6] = lottie.loadAnimation({
  container: document.getElementById("anim-essay"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "src/assets/animations/essay.json" // Atualize com o caminho correto
});

// Função para tocar a animação
function playAnimation(id) {
  if (!lottiePlayers[id].isAnimating) {
    lottiePlayers[id].play();
    lottiePlayers[id].isAnimating = true;
  }
}

// Função para parar a animação e deixar no último frame
function stopAnimation(id) {
  if (lottiePlayers[id].isAnimating) {
    lottiePlayers[id].stop(); // Para a animação no frame atual
    lottiePlayers[id].isAnimating = false;
  }
}

// Eventos para hover nos elementos
// Ativar animação ao passar o mouse sobre o card
document.querySelectorAll(".card").forEach((card, index) => {
  const id = index + 1;
  
  card.addEventListener("mouseenter", () => playAnimation(id));  // Play no hover
  card.addEventListener("mouseleave", () => stopAnimation(id));  // Stop no sair do hover
});

// Função para rolar até o topo suavemente
document.getElementById("scrollTopBtn").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Seleciona a área de rolagem e os botões
const cardScrollContainer = document.querySelector(".card-custom-scroll");
const cardBtnScrollLeft = document.querySelector(".card-btn-scroll-left");
const cardBtnScrollRight = document.querySelector(".card-btn-scroll-right");

// Função para mover para a esquerda
cardBtnScrollLeft.addEventListener("click", () => {
  cardScrollContainer.scrollBy({
    left: -cardScrollContainer.offsetWidth,  // Move uma "página" para a esquerda
    behavior: "smooth"
  });
});

// Função para mover para a direita
cardBtnScrollRight.addEventListener("click", () => {
  cardScrollContainer.scrollBy({
    left: cardScrollContainer.offsetWidth,  // Move uma "página" para a direita
    behavior: "smooth"
  });
});



// Selecionando os botões e o container de benefícios
const btnScrollLeft = document.querySelector(".btn-scroll-left");
const btnScrollRight = document.querySelector(".btn-scroll-right");
const scrollContainer = document.querySelector(".custom-scroll");

// Função para verificar se há itens para rolar
function checkScrollButtons() {
  // Verifica se o botão à esquerda deve ser mostrado
  if (scrollContainer.scrollLeft > 0) {
    btnScrollLeft.classList.add("show");
  } else {
    btnScrollLeft.classList.remove("show");
  }

  // Verifica se o botão à direita deve ser mostrado
  if (scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth) {
    btnScrollRight.classList.add("show");
  } else {
    btnScrollRight.classList.remove("show");
  }
}

// Função para rolar o conteúdo para a esquerda
btnScrollLeft.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -200, // Rola 200px para a esquerda
    behavior: "smooth" // Rolagem suave
  });
  checkScrollButtons(); // Atualiza os botões após o clique
});

// Função para rolar o conteúdo para a direita
btnScrollRight.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 200, // Rola 200px para a direita
    behavior: "smooth" // Rolagem suave
  });
  checkScrollButtons(); // Atualiza os botões após o clique
});

// Verifica a visibilidade dos botões ao carregar a página
checkScrollButtons();

// Adiciona um evento de rolagem para atualizar os botões conforme o usuário rola
scrollContainer.addEventListener("scroll", checkScrollButtons);


const scrollxy = document.querySelector(".custom-scroll");

let isDown = false; // Indica se o botão do mouse está pressionado
let startX;
let scrollLeft;

// Evento de clique e arraste no mouse
scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollContainer.classList.add("active"); // Adiciona uma classe para estilo, se quiser
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDown = false; // Para de arrastar se o mouse sair do container
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mouseup", () => {
  isDown = false; // Para de arrastar quando o mouse é solto
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return; // Só executa se o mouse estiver pressionado
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 0.6; // Velocidade do scroll (ajuste se necessário)
  scrollContainer.scrollLeft = scrollLeft - walk;
});


// Logic automatic scroll in institutions
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn"t opted in for recuded motion, then we add the animation
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

// Fluxogram animation
document.addEventListener("DOMContentLoaded", () => {
  const trailPath = document.querySelector(".trail-path");
  const points = document.querySelectorAll(".point");
  const infoContainers = document.querySelectorAll(".info-container");

  // Obtém o comprimento total da linha
  const totalLength = trailPath.getTotalLength();
  trailPath.style.strokeDasharray = totalLength; // Ajusta o tamanho da linha conforme o comprimento
  trailPath.style.strokeDashoffset = totalLength; // Inicialmente a linha está oculta

  const duration = 5; // Duração total da animação da linha em segundos
  const delayBetweenPoints = 1; // Delay entre cada ponto (em segundos)
  
  let progress = 0;  // Controla o progresso da animação
  let pointIndex = 0;  // Controla qual ponto deve aparecer

  // Função para animar a linha e mostrar os pontos
  const animateLine = () => {
    const interval = setInterval(() => {
      // Incrementar o progresso da linha
      progress += (totalLength / (duration * 60));  // Dividido por 60 para FPS de 60
      trailPath.style.strokeDashoffset = totalLength - progress;

      // Mostrar os pontos conforme a linha avança
      while (pointIndex < points.length && progress >= (pointIndex * (totalLength / points.length))) {
        points[pointIndex].classList.add("show"); // Torna o ponto visível
        infoContainers[pointIndex].style.opacity = 1; // Torna o informativo visível
        pointIndex++;
      }

      // Se a linha alcançar o final, para a animação
      if (progress >= totalLength) {
        clearInterval(interval);
      }
    }, 1000 / 60); // 60 FPS
  };

  // Configurando o IntersectionObserver para observar quando a seção estiver visível
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // Se a seção entrou na viewport
        animateLine(); // Inicia a animação da linha
        observer.disconnect(); // Para de observar depois que a animação começar
      }
    });
  }, {
    threshold: 0.5 // A animação começa quando 50% da seção está visível
  });

  const fluxogramaSection = document.querySelector(".trail-container");
  observer.observe(fluxogramaSection); // Observa a seção do fluxograma
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll("#accordionFlush .accordion-item");
  const toggleButton = document.getElementById("toggleButton");

  const visibleCount = 3; // Quantidade inicial visível

  // Configurar o estado inicial dos acordeões
  accordionItems.forEach((item, index) => {
      if (index < visibleCount) {
          item.classList.add("visible");
      }
  });

  // Alternar visibilidade ao clicar no botão
  toggleButton.addEventListener("click", () => {
      const hiddenItems = Array.from(accordionItems).filter(item => !item.classList.contains("visible"));
      if (hiddenItems.length > 0) {
          // Mostrar todos os itens
          accordionItems.forEach((item) => item.classList.add("visible"));
          toggleButton.textContent = "Mostrar menos";
      } else {
          // Ocultar itens além do limite inicial
          accordionItems.forEach((item, index) => {
              if (index >= visibleCount) {
                  item.classList.remove("visible");
              }
          });
          toggleButton.textContent = "Mostrar mais";
      }
  });
});

// Form

const modalColor = document.getElementById("modalColor"); 

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      institution: document.getElementById('institution').value,
      workWith: document.getElementById('workWith').value,
      role: document.getElementById('role').value,
      institutionSize: document.getElementById('institutionSize').value,
      institutionType: document.getElementById('institutionType').value,
      message: document.getElementById('message').value,
  };

  fetch('http://localhost:3000/send-email', { // Altere o URL para o IP da sua API se necessário
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then((response) => {
      if (response.ok) {
          openModal("successMsg");
          modalColor.style.backgroundColor = "var(--GREEN)";
          document.getElementById('contactForm').reset();
      } else {
        openModal("errorMsg");
        modalColor.style.backgroundColor = "#FF0000";

      }
  })
  .catch((error) => {
      console.error('Erro:', error);
      openModal("errorMsg");
      modalColor.style.backgroundColor = "#FF0000";
  });
});