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

