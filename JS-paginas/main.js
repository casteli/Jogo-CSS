//FASE BACKGROUND
// função do botão da pagina um (backgorund)
function buttonPlayB1() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "oque faz o elemento background-repeat: no-repeat;? \n 1: Faz com que a imagem de fundo não se repita  \n 2: Proíbe que a imagem de fundo role com a página",
    );
    if (escolha === "1") {
      window.location.href = "../fase-background/pagina2.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina dois (backgorund)
function buttonPlayB2() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "oque faz o elemento background-size: cover;?\n 1: Faz com que a imagem de fundo cubra todo espaço no container  \n 2: faz a imagem de fundo cobrir somente o topo da pagina",
    );
    if (escolha === "1") {
      window.location.href = "../fase-background/pagina3.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina três (backgorund)
function buttonPlayB3() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Oque é background-image:?\n 1: faz parte do conjunto de propriedades utilizadas no CSS para definir o background  \n 2: Serve apenas para por fundo em uma <div>",
    );
    if (escolha === "1") {
      window.location.href = "../fase-background/pagina4.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina quatro (backgorund)

function buttonPlayB4() {
  window.location.href = "/game/index.html";
}

// FASE DAS FONTS A BAIXO

// função do botão da pagina um (FONT)
function buttonPlayF1() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Oque faz o font-size:? \n 1: Serve para definir o tamanho da fonte  \n 2: muda a cor da fonte",
    );
    if (escolha === "1") {
      window.location.href = "../fase-font/pagina2.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina dois (font)
function buttonPlayF2() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Oque faz o font-family:? \n 1: muda o estilo da fonte de acordo com a familia atribuida  \n 2: muda a largura da fonte",
    );
    if (escolha === "1") {
      window.location.href = "../fase-font/pagina3.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina três (font)
function buttonPlayF3() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "oque faz o font-weight:bold? \n 1: deixa a fonte em negrito \n 2: a fonte fica sublinhada",
    );
    if (escolha === "1") {
      window.location.href = "../fase-font/pagina4.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina quatro (font)
function buttonPlayF4() {
  window.location.href = "/game/index.html";
}

// --- FASE DA MARGIN A BAIXO

// função do botão da pagina um (margin)
function buttonPlayM1() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Para o que serve a propriedade margin-top? \n 1: Definir a margem superior de um elemento \n 2:  Definir a margem inferior de um elemento",
    );
    if (escolha === "1") {
      window.location.href = "../fase-margin/pagina2.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina dois (margin)
function buttonPlayM2() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Para o que serve a propriedade margin-left? \n 1: Definir a margem esquerda de um elemento \n Definir a margem direita de um elemento",
    );
    if (escolha === "1") {
      window.location.href = "../fase-margin/pagina3.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina três (margin)
function buttonPlayM3() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Para o que serve a propriedade margin-right? \n 1: Definir a margem direita de um elemento  \n 2: Definir a margem de baixo de um elemento ",
    );
    if (escolha === "1") {
      window.location.href = "../fase-margin/pagina4.html";
    } else if (escolha === "2") {
      window.location.href = "../gameover/gameover.html";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina quatro (margin)
function buttonPlayM4() {
  window.location.href = "/game/index.html";
}

// função do botão da pagina gameover
function buttonInicio() {
  window.location.href = "/game/index.html";
}
