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

// Validação dos campos e envio das informações para api
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const modalColor = document.getElementById("modalColor");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");

    // Altera o conteúdo do botão para indicar carregamento
    const submitButton = document.getElementById('submitButton');
    const originalButtonText = submitButton.innerHTML; // Salva o conteúdo original
    submitButton.innerHTML = 'Enviando... <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
    submitButton.disabled = true; // Desativa o botão para evitar múltiplos cliques

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const institution = document.getElementById('institution').value;
    const workWith = document.getElementById('workWith').value;
    const role = document.getElementById('role').value;
    const institutionSize = document.getElementById('institutionSize').value;
    const institutionType = document.getElementById('institutionType').value;
    const message = document.getElementById('message').value;
    
    // Validação de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      emailField.style.border = "1px solid #FF0000";
        
      emailField.setCustomValidity("Insira um e-mail válido");
      emailField.reportValidity();

      setTimeout(() => {
        emailField.style.border = "";
        emailField.setCustomValidity("");
      }, 2000);
        // Restaura o botão e retorna
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        return;
    }

    // Validação de telefone (somente números e no formato correto)
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        phoneField.style.border = "1px solid #FF0000";
        
        phoneField.setCustomValidity("Insira um telefone válido");
        phoneField.reportValidity();

        setTimeout(() => {
          phoneField.style.border = "";
          phoneField.setCustomValidity("");
        }, 2000);

        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        return;
    }

    const formData = {
        name,
        email,
        phone,
        institution,
        workWith,
        role,
        institutionSize,
        institutionType,
        message,
    };

    fetch('https://zoomeduca.com.br/send-email', { // Altere o URL para o IP da sua API se necessário
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
    })
    .finally(() => {
        // Restaura o conteúdo original e reativa o botão após o envio
        submitButton.innerHTML = originalButtonText; // Restaura o texto original
        submitButton.disabled = false; // Reativa o botão
    });
});

// Função para formatar o número de telefone enquanto é digitado
document.getElementById('phone').addEventListener('input', function (event) {
    let input = event.target;
    let phone = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Se o campo estiver vazio após apagar tudo, limpa o valor
    if (phone.length === 0) {
        input.value = '';
        return;
    }

    // Aplica a formatação enquanto o número é digitado
    if (phone.length <= 2) {
        phone = `(${phone}`;
    } else if (phone.length <= 6) {
        phone = `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
    } else {
        phone = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
    }

    // Verifica se o usuário está apagando um caractere
    if (input.selectionStart === input.selectionEnd) {
        let cursorPosition = input.selectionStart;

        // Verifica se o caractere '-' é apagado
        if (cursorPosition > 0 && input.value[cursorPosition - 1] === '-') {
            input.setSelectionRange(cursorPosition - 1, cursorPosition - 1); // Ajusta a posição do cursor
        }
    }

    // Atualiza o valor do campo com a formatação
    input.value = phone;
});

// Contador de caracteres no campo de mensagem
document.getElementById('message').addEventListener('input', function () {
    const charCountStyle = document.getElementById("charCount");
    const charCount = this.value.length;

    if (charCount == 5000) {
        charCountStyle.style.color = "#FF0000"; // Muda a cor do contador para vermelho quando atingir 5000 caracteres
    } else {
        charCountStyle.style.color = ""; // Reseta a cor quando o contador não estiver no limite
    }
    document.getElementById('charCount').textContent = `${charCount}/5000 caracteres`;
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
