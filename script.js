const startButton = document.getElementById("startButton");

const startScreen = document.getElementById("startScreen");
const cakeScreen = document.getElementById("cakeScreen");

const cakeArea = document.querySelector(".cake-area");

const candle = document.getElementById("candle");
const flame = document.querySelector(".flame");

const birthdayMessage = document.getElementById("birthdayMessage");

const loadingText = document.getElementById("loadingText");

const confettiContainer = document.getElementById("confetti");


/* =========================
   BOTÃO INICIAL
========================= */

startButton.addEventListener("click", () => {

  // Troca de tela
  startScreen.classList.remove("active");
  cakeScreen.classList.add("active");

  // Pequena espera antes do bolo começar
  setTimeout(() => {

    loadingText.textContent = "Olha só... 🎂";

    cakeArea.classList.add("assemble");

  }, 600);


  /*
    Depois que as três partes terminarem
    de cair, aparece a vela.
  */

  setTimeout(() => {

    loadingText.textContent = "Só falta uma coisa... 🕯️";

    candle.classList.add("show");

  }, 2300);


  /*
    Acende a vela.
  */

  setTimeout(() => {

    loadingText.textContent = "Agora sim... ✨";

    flame.classList.add("lit");

  }, 3200);


  /*
    Mostra a mensagem.
  */

  setTimeout(() => {

    loadingText.style.display = "none";

    birthdayMessage.classList.add("show");

    createConfetti();

  }, 4100);

});


/* =========================
   CONFETES
========================= */

function createConfetti() {

  const amount = 90;

  for (let i = 0; i < amount; i++) {

    const piece = document.createElement("div");

    piece.classList.add("confetti-piece");

    // Posição horizontal aleatória
    piece.style.left =
      Math.random() * 100 + "%";

    // Tamanho aleatório
    const width =
      Math.random() * 7 + 5;

    const height =
      Math.random() * 10 + 8;

    piece.style.width = width + "px";
    piece.style.height = height + "px";

    // Tempo aleatório
    const duration =
      Math.random() * 3 + 3;

    piece.style.animationDuration =
      duration + "s";

    // Pequeno atraso
    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    // Formatos variados
    const shape =
      Math.random();

    if (shape < 0.5) {
      piece.style.borderRadius = "2px";
    } else {
      piece.style.borderRadius = "50%";
    }

    // Tons claros variados
    const colors = [
      "#ffffff",
      "#ffd76a",
      "#f5f5f5",
      "#d9d9d9",
      "#ffcf70"
    ];

    piece.style.background =
      colors[
        Math.floor(Math.random() * colors.length)
      ];

    // Rotação inicial
    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(piece);

    // Remove depois da animação
    setTimeout(() => {
      piece.remove();
    }, (duration + 2) * 1000);
  }
}
