var board = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ];
  
  var columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var rows = [1, 2, 3, 4, 5, 6, 7, 8];
  
  console.log("    " + columns.join("   "));
  console.log("  +-----------------+");
  for (var y = 0; y < 8; y++) {
    var row = rows[y] + " | ";
    for (var x = 0; x < 8; x++) {
      row += board[y][x] + " ";
      if ((x + y) % 2 == 0) {
        row += "_";
      } else {
        row += "/";
      }
    }
    row = row.slice(0, -1); // Remove o último caractere ( _ ou / )
    console.log(row + " | " + rows[y]);
  }
  console.log("  +-----------------+");
  console.log("    " + columns.join("   "));
  

  // define as regras para o movimento de cada peça
  var rules = {
    "p": [
      { x: 0, y: 1 },
      { x: 0, y: 2 }
    ],
    "P": [
      { x: 0, y: -1 },
      { x: 0, y: -2 }
    ],
    "r": [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 }
    ],
    "R": [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 }
    ],
    "n": [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: -1, y: 2 },
      { x: -2, y: 1 },
      { x: 1, y: -2 },
      { x: 2, y: -1 },
      { x: -1, y: -2 },
      { x: -2, y: -1 }
    ],
    "N": [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: -1, y: 2 },
      { x: -2, y: 1 },
      { x: 1, y: -2 },
      { x: 2, y: -1 },
      { x: -1, y: -2 },
      { x: -2, y: -1 }
    ],
    "b": [
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 }
    ],
    "B": [
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 }
    ],
    "q": [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: - 1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 }
    ],
    "Q": [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 1, y: 1 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 }
    ],
    "k": [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 1, y: 1 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 }
    ],
    "K": [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 1, y: 1 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 }
    ]
    };
    
    // define uma função para mover uma peça
    function movePiece(piece, startX, startY, endX, endY) {
    // verifica se a peça pode se mover para a posição de destino
    var validMoves = rules[piece];
    for (var i = 0; i < validMoves.length; i++) {
    var move = validMoves[i];
    if (startX + move.x === endX && startY + move.y === endY) {
    // move a peça
    board[endY][endX] = piece;
    board[startY][startX] = " ";
    return true;
    }
    }
    // se não houver movimentos válidos, retorna falso
    return false;
    }
    
    // define uma função para exibir o tabuleiro
    function displayBoard() {
    var boardStr = "";
    for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
    boardStr += board[y][x];
    }
    boardStr += "\n";
    }
    console.log(boardStr);
    }

    function computerMove() {
        // Escolhe aleatoriamente uma peça do computador
        var pieceX = Math.floor(Math.random() * 8);
        var pieceY = Math.floor(Math.random() * 8);
        var piece = board[pieceY][pieceX];
      
        // Se a peça escolhida não pertence ao computador, escolhe outra peça
        while (piece.toUpperCase() === piece) {
          pieceX = Math.floor(Math.random() * 8);
          pieceY = Math.floor(Math.random() * 8);
          piece = board[pieceY][pieceX];
        }
      
        // Obtém as posições possíveis para mover a peça escolhida
        var moves = getMoves(pieceX, pieceY);
      
        // Escolhe aleatoriamente uma posição para mover a peça
        var moveIndex = Math.floor(Math.random() * moves.length);
        var move = moves[moveIndex];
      
        // Move a peça para a nova posição
        movePiece(pieceX, pieceY, move.x, move.y);
      
        // Imprime o novo estado do tabuleiro
        printBoard();
      }
      
    
    // loop principal do jogo
    while (true) {
    // exibe o tabuleiro
    displayBoard();
    // solicita a entrada do jogador
    var input = prompt("Qual peça você deseja mover? (ex: e2)");
    var startX = input.charCodeAt(0) - 97;
    var startY = 8 - parseInt(input.charAt(1));
    input = prompt("Para onde você deseja mover a peça? (ex: e4)");
    var endX = input.charCodeAt(0) - 97;
    var endY = 8 - parseInt(input.charAt(1));
    // verifica se a posição de origem contém uma peça válida
    var piece = board[startY][startX];
    if (piece === " ") {
    console.log("Posição inválida. Tente novamente.");
    continue;
    }
    // tenta mover a peça
    if (!movePiece(piece, startX, startY, endX, endY)) {
    console.log("Movimento inválido. Tente novamente.");
    continue;
    }
    // verifica se o jogo acabou
    if (piece === "k" && board[endY][endX] === "K") {
    console.log("Xeque-mate! O jogador venceu.");
    break;
    } else if (piece === "K" && board[endY][endX] === "k") {
    console.log("Xeque-mate! O computador venceu.");
    break;
    }
    // passa a vez para o computador
    var validMoves = [];
    for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
    if (board[y][x] === "K") {
    for (var i = 0; i < rules["K"].length; i++) {
    var move = rules["K"][i];
    var newX = x + move.x;
    var newY = y + move.y;
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && board[newY][newX] !== "K") {
    validMoves.push({ startX: x, startY: y, endX: newX, endY: newY });
    }
    }
    }
    }
    }
    // escolhe um movimento aleatório para o computador
    var randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    movePiece("K", randomMove.startX, randomMove.startY, randomMove.endX, randomMove.endY);
    // verifica se o jogo acabou
    if (piece === "k" && board[endY][endX] === "K") {
    console.log("Xeque-mate! O jogador venceu.");
    break;
    } else if (piece === "K" && board[endY][endX] === "k") {
    console.log("Xeque-mate! O computador venceu.");
    break;
    }
    }