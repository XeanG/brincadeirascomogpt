var playerName = prompt("Qual é o seu nome?");
alert("Olá, " + playerName + "! Bem-vindo ao jogo de terror em texto!");

var room = 1;
while (room != 0) {
  switch (room) {
    case 1:
      var choice1 = prompt("Você está em um corredor escuro. Há três portas à sua frente. Qual porta você escolhe? (1, 2, 3)");
      if (choice1 === "1") {
        alert("Você escolheu a porta 1. Ela abre para uma sala vazia.");
        room = 2;
      } else if (choice1 === "2") {
        alert("Você escolheu a porta 2. A porta está trancada.");
      } else if (choice1 === "3") {
        alert("Você escolheu a porta 3. Há um fantasma assustador na sala!");
        room = 0;
      } else {
        alert("Escolha uma das opções válidas.");
      }
      break;
    case 2:
      var choice2 = prompt("Você vê uma escada que leva para cima e outra que leva para baixo. Qual caminho você escolhe? (cima, baixo)");
      if (choice2 === "cima") {
        alert("Você segue a escada para cima e chega em um quarto com uma cama desarrumada.");
        room = 3;
      } else if (choice2 === "baixo") {
        alert("Você segue a escada para baixo e encontra uma porta trancada.");
        room = 1;
      } else {
        alert("Escolha uma das opções válidas.");
      }
      break;
    case 3:
      var choice3 = prompt("Você vê uma janela quebrada e uma porta fechada. O que você faz? (janela, porta)");
      if (choice3 === "janela") {
        alert("Você pula pela janela quebrada e cai em um jardim. Mas a grama é cheia de espinhos!");
        room = 0;
      } else if (choice3 === "porta") {
        alert("Você abre a porta e encontra uma passagem secreta!");
        room = 4;
      } else {
        alert("Escolha uma das opções válidas.");
      }
      break;
    case 4:
      alert("Você segue a passagem secreta e chega a um porão escuro. Há uma figura sombria parada na escuridão!");
      var choice4 = prompt("O que você faz? (fugir, lutar)");
      if (choice4 === "fugir") {
        alert("Você tenta fugir, mas a figura sombria te alcança e te pega! Fim do jogo.");
        room = 0;
      } else if (choice4 === "lutar") {
        alert("Você luta bravamente contra a figura sombria e a derrota! Você escapa do porão e vence o jogo. Parabéns!");
        room = 0;
      } else {
        alert("Escolha uma das opções válidas.");
      }
      break;
    default:
      alert("Fim do jogo.");
      room = 0;
  }
}
