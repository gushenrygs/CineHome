function mostrarConteudo() {
    var conteudo = document.getElementById("conteudo");
    var seta = document.getElementById("seta");

    // Toggle para exibir ou esconder o conteúdo
    conteudo.classList.toggle("active");

    // Toggle para rotacionar a seta
    seta.classList.toggle("seta-ativa");
}

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.movie-card');
const cardWidth = cards[0].offsetWidth;  // Largura das imagens
const totalCards = cards.length;
let currentIndex = 0;

// Função para atualizar a visibilidade das setas
function updateButtons() {
  if (currentIndex === 0) {
    prevButton.classList.add('disabled');  // Desabilita a seta esquerda na primeira imagem
    prevButton.setAttribute('disabled', 'true');
  } else {
    prevButton.classList.remove('disabled');
    prevButton.removeAttribute('disabled');
  }

  if (currentIndex === totalCards - 1) {
    nextButton.classList.add('disabled');  // Desabilita a seta direita na última imagem
    nextButton.setAttribute('disabled', 'true');
  } else {
    nextButton.classList.remove('disabled');
    nextButton.removeAttribute('disabled');
  }
}

// Função para mover o carrossel com transição suave
function moveCarousel() {
  track.style.transition = 'transform 0.5s ease-in-out';  // Suaviza a transição
  track.style.transform = `translateX(-${cardWidth * currentIndex}px)`; // Ajusta a posição da track
  updateButtons();  // Atualiza a visibilidade das setas
}

// Event listener para o botão "anterior"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;  // Move para a imagem anterior
    moveCarousel();
  }
});

// Event listener para o botão "próximo"
nextButton.addEventListener('click', () => {
  // Impede que o carrossel continue se já estiver na última imagem
  if (currentIndex < totalCards - 1) {
    currentIndex++;  // Move para a próxima imagem
    moveCarousel();
  }
});

// Inicializa o carrossel com a posição correta
moveCarousel();
