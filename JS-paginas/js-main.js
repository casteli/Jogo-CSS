// função do botão da pagina um
function buttonPlay() {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(
      "Como declarar uma tag em HTML?\n 1: <nome da tag>  \n 2: {nome da tag}",
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
      "Como declarar uma tag em HTML?\n 1: <nome da tag>  \n 2: {nome da tag}",
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
