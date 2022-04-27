// função do botão da pagina um
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

// função do botão da pagina dois
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

// função do botão da pagina dois
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

// função do botão da pagina quatro
function buttonPlay4() {
  window.location.href = "/game/index.html";
}
