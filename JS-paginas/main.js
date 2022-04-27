// função do botão da pagina um (backgorund)
function buttonPlay() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "oque faz o elemento background-repeat: no-repeat;? \n 1: Faz com que a imagem de fundo não se repita  \n 2: Proíbe que a imagem de fundo role com a página",
    );
    if (escolha === "1") {
      window.location.href = "./pagina2.html";
    } else if (escolha === "2") {
      window.location.href = "gameover";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina dois (backgorund)
function buttonPlay2() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "oque faz o elemento background-size: cover;?\n 1: Faz com que a imagem de fundo cubra todo espaço no container  \n 2: faz a imagem de fundo cobrir somente o topo da pagina",
    );
    if (escolha === "1") {
      window.location.href = "./pagina3.html";
    } else if (escolha === "2") {
      window.location.href = "gameover";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina três (backgorund)
function buttonPlay3() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Oque é background-image:?\n 1: faz parte do conjunto de propriedades utilizadas no CSS para definir o background  \n 2: Serve apenas para por fundo em uma <div>",
    );
    if (escolha === "1") {
      window.location.href = "./pagina4.html";
    } else if (escolha === "2") {
      window.location.href = "gameover";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina quatro (backgorund)
function buttonPlay4() {
  window.location.href = "/game/index.html";
}

//pagina dois a baixo

// função do botão da pagina um (FONT)
function buttonPlayF1() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Oque faz o font-size:? \n 1: Serve para definir o tamanho da fonte  \n 2: muda a cor da fonte",
    );
    if (escolha === "1") {
      window.location.href = "./pagina2.html";
    } else if (escolha === "2") {
      window.location.href = "gameover";
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
      window.location.href = "./pagina3.html";
    } else if (escolha === "2") {
      window.location.href = "gameover";
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
      window.location.href = "./pagina4.html";
    } else if (escolha === "2") {
      window.location.href = "gameover";
    } else {
      alert("essa opção não existe");
    }
  }
}

// função do botão da pagina quatro (font)
function buttonPlayF4() {
  window.location.href = "/game/index.html";
}
