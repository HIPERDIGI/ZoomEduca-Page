// Função para mostrar/ocultar o botão baseado na rolagem
window.onscroll = function() {
  const button = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
};

// Configuração do Intersection Observer para lazy load das animações
function loadLottieAnimation(elementId, animationDataUrl) {
  lottie.loadAnimation({
    container: document.getElementById(elementId), // O contêiner da animação
    renderer: 'svg', // Tipo de renderização (pode ser 'svg', 'canvas' ou 'html')
    loop: false, // Define se a animação vai se repetir
    autoplay: true, // Define se a animação vai iniciar automaticamente
    path: animationDataUrl, // Caminho do arquivo JSON da animação
  });
}

// Configuração do Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Quando o contêiner entra na tela, carrega a animação
      const elementId = entry.target.id; // Pega o id do elemento (no caso, #anim-profile)
      
      // Pega o caminho do arquivo JSON da animação através do data-attribute
      const animationDataUrl = entry.target.getAttribute('data-animation'); 

      loadLottieAnimation(elementId, animationDataUrl); // Carrega a animação Lottie

      // Desativa o observer após carregar a animação
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); // A animação será carregada quando 50% do contêiner estiver visível

// Alvo de observação (todos os contêineres de animação Lottie)
const lottieContainers = document.querySelectorAll('.lottie-container');
lottieContainers.forEach(container => {
  observer.observe(container); // Observa cada contêiner
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


// Automatic scroll logic for institutions
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn"t opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

// Add animations and initialize lazy-loading
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // Clone the items for infinite scroll
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });

    // Initialize lazy loading for images
    initializeLazyLoading(scroller.querySelectorAll("img[data-src]"));
  });
}

// Lazy-loading logic
function initializeLazyLoading(images) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Set the real image source
        img.removeAttribute("data-src"); // Clean up the data attribute
        observer.unobserve(img); // Stop observing this image
      }
    });
  }, { rootMargin: "50px", threshold: 0.1 });

  images.forEach((img) => observer.observe(img));
}

document.querySelectorAll(".video-container").forEach((container) => {
  const videoId = container.dataset.videoId;
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  // Evento de clique para carregar o iframe
  container.addEventListener("click", () => {
    container.classList.add("active");
    container.appendChild(iframe);
  });
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

// Animação crescente métricas 
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".metric-number");
  const duration = 2000; // Duração total da animação em milissegundos

  const animateNumbers = (entry, observer) => {
    if (entry.isIntersecting) {
      counters.forEach((counter) => {
        const target = +counter.dataset.target;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = elapsedTime / duration; // Progresso linear (0 a 1)
          const value = Math.floor(progress * target);
          const remaining = target - value;

          if (remaining > 5) {
            counter.textContent = formatNumber(value); // Atualização rápida
          } else if (remaining > 0) {
            const slowUpdate = Math.min(target, value + 1); // Incrementa 1 de forma controlada
            counter.textContent = formatNumber(slowUpdate);
          }

          if (value < target) {
            requestAnimationFrame(updateCounter); // Continua a animação
          } else {
            counter.textContent = formatNumber(target); // Garante o valor final
            counter.classList.add("scrolled"); // Classe para indicar finalização
          }
        };

        requestAnimationFrame(updateCounter);
      });

      observer.disconnect(); // Para de observar após a animação
    }
  };

  const formatNumber = (number) => {
    const formatedNumber = new Intl.NumberFormat("pt-BR").format(number); // Formata com separador de milhar
    return " + " + formatedNumber;
  };

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => animateNumbers(entry, observer)),
    { threshold: 0.6 } // Inicia a animação quando 60% do container estiver visível
  );

  observer.observe(document.querySelector("#metrics"));
});
