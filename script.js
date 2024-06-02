let nomeP1;
let nomeP2;
let jogadas = 0;
let tabuleiro = [
    ["card1", "card2", "card3"],
    ["card4", "card5", "card6"],
    ["card7", "card8", "card9"]
];

function verificaNomes() {
    nomeP1 = document.getElementById("player1Name").value;
    nomeP2 = document.getElementById("player2Name").value;

    while (nomeP1 == "" || nomeP2 == "") {
        if (nomeP1 == "") {
            alert("Nome não informado para o Jogador 1, favor informe um nome");
            break;
        } else if (nomeP2 == "") {
            alert("Nome não informado para o Jogador 2, favor informe um nome");
            break;
        }
    }

    if (nomeP1 != "" && nomeP2 != "") {
        navegarParaJogarPvP();
    }
}

function navegarParaTipoDeJogo() {
    window.location.href = 'tipoDeJogo.html';
}

function navegarParaJogarPvP() {
    window.location.href = 'jogarPvP.html';
}

function navegarParaCadastroPvP() {
    window.location.href = 'cadastroPvP.html';
}

function navegarParaCadastroPvM() {
    window.location.href = 'cadastroPvM.html';
}

class Jogador {
    constructor(nome, simbolo) {
        this.nome = nome;
        this.simbolo = simbolo;
    }
}



let jogador1 = new Jogador("nomeP1", "X");
let jogador2 = new Jogador("nomeP2", "O");
let jogadorAtual = jogador1;



function clickCard(cardId) {
    if (verificaSeEstaDisponivel(cardId)) {
        fazerJogada(cardId);
        verificaResultado();
        trocaJogadorAtual();
    } else {
        alert("Posição já está ocupada, tente outra!");
    }
}

function trocaJogadorAtual() {
    if (jogadorAtual.simbolo == "X") {
        jogadorAtual = jogador2;
    } else {
        jogadorAtual = jogador1;
    }
}

function verificaResultado() {
    let simboloVencedor;

    if (tabuleiro[0][0] == tabuleiro[0][1] && tabuleiro[0][1] == tabuleiro[0][2]) {
        simboloVencedor = tabuleiro[0][0];
    } else if (tabuleiro[1][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[1][2]) {
        simboloVencedor = tabuleiro[1][0];
    } else if (tabuleiro[2][0] == tabuleiro[2][1] && tabuleiro[2][1] == tabuleiro[2][2]) {
        simboloVencedor = tabuleiro[2][0];
    } else if (tabuleiro[0][0] == tabuleiro[1][0] && tabuleiro[1][0] == tabuleiro[2][0]) {
        simboloVencedor = tabuleiro[0][0];
    } else if (tabuleiro[0][1] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][1]) {
        simboloVencedor = tabuleiro[0][1];
    } else if (tabuleiro[0][2] == tabuleiro[1][2] && tabuleiro[1][2] == tabuleiro[2][2]) {
        simboloVencedor = tabuleiro[0][2];
    } else if (tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][2]) {
        simboloVencedor = tabuleiro[0][0];
    } else if (tabuleiro[0][2] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][0]) {
        simboloVencedor = tabuleiro[0][2];
    }

    if (simboloVencedor == jogador1.simbolo) {
        setTimeout(function () {
            alert(`Parabéns ${jogador1.nome}, você venceu!`);
        }, 50);
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 200);
    } else if (simboloVencedor == jogador2.simbolo) {
        setTimeout(function () {
            alert(`Parabéns ${jogador2.nome}, você venceu!`);
        }, 50);
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 200);
    } else if (jogadas == 9) {
        setTimeout(function () {
            alert("Empatou!");
        }, 50);
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 200);
    }
}

function verificaSeEstaDisponivel(cardId) {
    var valueCard = document.getElementById(cardId).textContent;
    if (valueCard == "") {
        return true;
    } else {
        return false;
    }

}

function fazerJogada(cardId) {
    var card = document.getElementById(cardId);
    card.textContent = jogadorAtual.simbolo;

    for (let linha = 0; linha <= 2; linha++) {
        for (let coluna = 0; coluna <= 2; coluna++) {
            if (tabuleiro[linha][coluna] == cardId) {
                tabuleiro[linha][coluna] = jogadorAtual.simbolo;
            }
        }
    }
    jogadas++;
}


