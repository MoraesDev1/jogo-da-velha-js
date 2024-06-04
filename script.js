if (localStorage.getItem('rankingList') != null) {
    var rankingList = JSON.parse(localStorage.getItem('rankingList'));
} else {
    var rankingList = [];
}

function navegarParaTipoDeJogo() {
    window.location.href = 'tipoDeJogo.html';
}

function navegarParaJogarPvP() {
    window.location.href = 'jogarPvP.html';
}

function navegarParaJogarPvM() {
    window.location.href = 'jogarPvM.html';
}

function navegarParaCadastroPvP() {
    window.location.href = 'cadastroPvP.html';
}

function navegarParaCadastroPvM() {
    window.location.href = 'cadastroPvM.html';
}

function navegarParaMenu() {
    window.location.href = 'index.html';
}

function navegarParaRanking() {
    window.location.href = 'ranking.html';
}

function verificaNome() {
    let nomeP1 = document.getElementById("player1Name").value;

    if (nomeP1 == "") {
        alert("Nome não informado para o Jogador, favor informe um nome");
        return;
    }

    if (nomeP1 != "") {
        localStorage.setItem("nomeP1", nomeP1);
    }
    navegarParaJogarPvM();
}

function verificaNomes() {
    let nomeP1 = document.getElementById("player1Name").value;
    let nomeP2 = document.getElementById("player2Name").value;

    if (nomeP1 == "" || nomeP2 == "") {
        if (nomeP1 == "") {
            alert("Nome não informado para o Jogador 1, favor informe um nome");
            return;
        } else if (nomeP2 == "") {
            alert("Nome não informado para o Jogador 2, favor informe um nome");
            return;
        }
    }

    if (nomeP1 != "" && nomeP2 != "") {
        localStorage.setItem("nomeP1", nomeP1);
        localStorage.setItem("nomeP2", nomeP2);
    }

    navegarParaJogarPvP();
}

function encerrarAplicacao() {
    localStorage.clear();
    window.close();
}

if (localStorage.getItem("vencedorAtual") != null) {
    var vencedorAtual = localStorage.getItem("vencedorAtual");
    rankingList.push(vencedorAtual);
    localStorage.setItem('rankingList', JSON.stringify(rankingList));
    localStorage.removeItem("vencedorAtual");
}

function exibeRanking() {

    if (rankingList.length > 0) {
        var telaRanking = document.getElementById("rankingList");
        for (let index = 0; index < rankingList.length; index++) {
            var itemRanking = document.createElement('p');
            itemRanking.textContent = rankingList[index];
            telaRanking.appendChild(itemRanking);
        }
    }
}