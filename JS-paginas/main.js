const frases = [
  "oque faz o elemento background-repeat: no-repeat? \n 1: Faz com que a imagem de fundo não se repita  \n 2: Proíbe que a imagem de fundo role com a página",
  "oque faz o elemento background-size: cover;?\n 1: Faz com que a imagem de fundo cubra todo espaço no container  \n 2: faz a imagem de fundo cobrir somente o topo da pagina",
  "Oque é background-image:?\n 1: faz parte do conjunto de propriedades utilizadas no CSS para definir o background  \n 2: Serve apenas para por fundo em uma <div>",
  "Oque faz o font-size? \n 1: Serve para definir o tamanho da fonte  \n 2: muda a cor da fonte",
  "Oque faz o font-family? \n 1: muda o estilo da fonte de acordo com a familia atribuida  \n 2: muda a largura da fonte",
  "oque faz o font-weight:bold? \n 1: deixa a fonte em negrito \n 2: a fonte fica sublinhada",
  "Para o que serve a propriedade margin-top? \n 1: Definir a margem superior de um elemento \n 2:  Definir a margem inferior de um elemento",
  "Para o que serve a propriedade margin-left? \n 1: Definir a margem esquerda de um elemento \n Definir a margem direita de um elemento",
  "Para o que serve a propriedade margin-right? \n 1: Definir a margem direita de um elemento  \n 2: Definir a margem de baixo de um elemento",
];
const gameOver = "../gameover/gameover.html";

function buttonPlay(proximaFase, frase) {
  let escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt(selecionarFrase(frase));
    if (escolha === "1") {
      window.location.href = proximaFase;
    } else if (escolha === "2") {
      window.location.href = gameOver;
    } else {
      alert("essa opção não existe");
    }
  }
}

function selecionarFrase(selecionado) {
  for (let i = 0; i < frases.length; i++) {
    if (frases[i].search(selecionado) != -1) {
      return frases[i];
    }
  }
}
