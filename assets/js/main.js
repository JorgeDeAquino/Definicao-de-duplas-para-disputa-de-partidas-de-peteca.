//Botão e seletor de quantidade de jogadores
const btn = document.getElementById("selecao-btn");

btn.addEventListener("click", function () {
    const nDeJogadores = document.querySelector('#quantidade__jogadores-select').value;

    if (nDeJogadores == 5) {
        aparecerLabels5Jgd();
        aparecerJogos5()
        movimentaElementos()
    } else if (nDeJogadores == 6) {
        aparecerLabels6Jgd()
        aparecerJogos6()
        movimentaElementos()
    } else if (nDeJogadores == 7) {
        aparecerLabels7Jgd()
        aparecerJogos7()
        movimentaElementos()
    } else if (nDeJogadores == 8) {
        aparecerLabels8Jgd()
        aparecerJogos8()
        movimentaElementos()
    } else if (nDeJogadores == 9) {
        aparecerLabels9Jgd()
        aparecerJogos9()
        movimentaElementos()
    } else if (nDeJogadores == 10) {
        aparecerLabels10Jgd()
        aparecerJogos10()
        movimentaElementos()
    } else {
        alert('opção invalida, selecione a quantidade de jogadores.')
    }

});

//executa funções para posicionamento dos elementos na tela
function movimentaElementos() {
    aparecerBotaoJogadores()
    desabilitarBotaoJogar()
    irParaPosicao()
    desabilitarSelectJogadores()
}

//função desabilitar o botão apos seleção de numero de jogadores
function desabilitarBotaoJogar() {
    document.getElementById("selecao-btn").classList.add('hide__botao__jogar');
}

//função desabilitar o label apos seleção de numero de jogadores
function desabilitarSelectJogadores() {
    document.getElementById("quantidade__jogadores-select").disabled = true;
}

//função para aparecer o botão de cadastrar os jogadores ao clicar
function aparecerBotaoJogadores() {
    document.querySelector('#btn-jogar').classList.remove('hide__botao__jogar');
    document.querySelector('#btn-reset').classList.remove('hide__botao__reset');
}

//função para posiccionar o elemento no começo
function irParaPosicao() {
    document.querySelector('.hover__conteudo__detalhe').classList.remove('hover__conteudo__detalhe');
    document.querySelector('.hover__selecao__jogadores').classList.remove('hover__selecao__jogadores');
}

//função de escolha de jogadores
const labelsJogadores = document.querySelectorAll('.hide__jogadores');

function aparecerLabels5Jgd() {
    for (var i = 0; i < labelsJogadores.length - 5; i++) {
        labelsJogadores[i].classList.remove('hide__jogadores')
    }
}

function aparecerLabels6Jgd() {
    for (var i = 0; i < labelsJogadores.length - 4; i++) {
        labelsJogadores[i].classList.remove('hide__jogadores')
    }
}

function aparecerLabels7Jgd() {
    for (var i = 0; i < labelsJogadores.length - 3; i++) {
        labelsJogadores[i].classList.remove('hide__jogadores')
    }
}

function aparecerLabels8Jgd() {
    for (var i = 0; i < labelsJogadores.length - 2; i++) {
        labelsJogadores[i].classList.remove('hide__jogadores')
    }
}

function aparecerLabels9Jgd() {
    for (var i = 0; i < labelsJogadores.length - 1; i++) {
        labelsJogadores[i].classList.remove('hide__jogadores')
    }
}

function aparecerLabels10Jgd() {
    for (var i = 0; i < labelsJogadores.length; i++) {
        labelsJogadores[i].classList.remove('hide__jogadores')
    }
}

//retirada de class esconder
const elementosEscondidos = document.querySelectorAll('.hide-definicao');
let habilitarJogadores = "";

//Libera elementos na quantidade selecionada
function aparecerJogos5() {
    for (var i = 0; i < elementosEscondidos.length - 18; i++) {
        elementosEscondidos[i].classList.remove('hide-definicao')
    }
    habilitarJogadores = 5;
    return habilitarJogadores;
}

function aparecerJogos6() {
    for (var i = 0; i < elementosEscondidos.length - 15; i++) {
        elementosEscondidos[i].classList.remove('hide-definicao')
    }
    habilitarJogadores = 6;
    return habilitarJogadores;
}

function aparecerJogos7() {
    for (var i = 0; i < elementosEscondidos.length - 13; i++) {
        elementosEscondidos[i].classList.remove('hide-definicao')
    }
    habilitarJogadores = 7;
    return habilitarJogadores;
}

function aparecerJogos8() {
    for (var i = 0; i < elementosEscondidos.length - 9; i++) {
        elementosEscondidos[i].classList.remove('hide-definicao')
    }
    habilitarJogadores = 8;
    return habilitarJogadores;
}

function aparecerJogos9() {
    for (var i = 0; i < elementosEscondidos.length - 5; i++) {
        elementosEscondidos[i].classList.remove('hide-definicao')
    }
    habilitarJogadores = 9;
    return habilitarJogadores;
}

function aparecerJogos10() {
    for (var i = 0; i < elementosEscondidos.length; i++) {
        elementosEscondidos[i].classList.remove('hide-definicao')
    }
    habilitarJogadores = 10;
    return habilitarJogadores;
}

//função refresh
const btnReset = document.getElementById("btn-reset");

btnReset.addEventListener("click", function () {
    location.reload();
});


//função para definir jogos apos preenchimento dos campos
const btnJogar = document.getElementById("btn-jogar");

btnJogar.addEventListener("click", function () {
    if (habilitarJogadores == 5) {
        jogoCom5()
    } else if (habilitarJogadores == 6) {
        jogoCom6()
    } else if (habilitarJogadores == 7) {
        jogoCom7()
    } else if (habilitarJogadores == 8) {
        jogoCom8()
    } else if (habilitarJogadores == 9) {
        jogoCom9()
    } else if (habilitarJogadores == 10) {
        jogoCom10()
    }
});


//jogadores
function jogoCom5() {
    let jogador1 = document.getElementById("jogador_1").value;
    let jogador2 = document.getElementById("jogador_2").value;
    let jogador3 = document.getElementById("jogador_3").value;
    let jogador4 = document.getElementById("jogador_4").value;
    let jogador5 = document.getElementById("jogador_5").value;


    let prt1 = `<tr><td> ${jogador2} - ${jogador1} </td></tr>  <tr><td> ${jogador3} - ${jogador5} </td></tr>`;
    let prt2 = `<tr><td> ${jogador1} - ${jogador3} </td></tr>  <tr><td> ${jogador5} - ${jogador4} </td></tr>`;
    let prt3 = `<tr><td> ${jogador4} - ${jogador1} </td></tr>  <tr><td> ${jogador3} - ${jogador2} </td></tr>`;
    let prt4 = `<tr><td> ${jogador1} - ${jogador5} </td></tr>  <tr><td> ${jogador2} - ${jogador4} </td></tr>`;
    let prt5 = `<tr><td> ${jogador5} - ${jogador2} </td></tr>  <tr><td> ${jogador4} - ${jogador3} </td></tr>`;

    let partidas = [prt1, prt2, prt3, prt4, prt5];

    for (var i = 0; i < partidas.length; i++) {
        document.getElementById(`partida_${i + 1}`).innerHTML = `${partidas[i]}`
    };
};

function jogoCom6() {
    let jogador1 = document.getElementById("jogador_1").value;
    let jogador2 = document.getElementById("jogador_2").value;
    let jogador3 = document.getElementById("jogador_3").value;
    let jogador4 = document.getElementById("jogador_4").value;
    let jogador5 = document.getElementById("jogador_5").value;
    let jogador6 = document.getElementById("jogador_6").value;

    let prt1 = `<tr><td> ${jogador2} - ${jogador1} </td></tr>  <tr><td> ${jogador3} - ${jogador5} </td></tr>`
    let prt2 = `<tr><td> ${jogador4} - ${jogador6} </td></tr>  <tr><td> ${jogador1} - ${jogador3} </td></tr>`
    let prt3 = `<tr><td> ${jogador6} - ${jogador2} </td></tr>  <tr><td> ${jogador5} - ${jogador4} </td></tr>`
    let prt4 = `<tr><td> ${jogador4} - ${jogador1} </td></tr>  <tr><td> ${jogador3} - ${jogador2} </td></tr>`
    let prt5 = `<tr><td> ${jogador6} - ${jogador5} </td></tr>  <tr><td> ${jogador1} - ${jogador3} </td></tr>`
    let prt6 = `<tr><td> ${jogador2} - ${jogador4} </td></tr>  <tr><td> ${jogador3} - ${jogador6} </td></tr>`
    let prt7 = `<tr><td> ${jogador6} - ${jogador1} </td></tr>  <tr><td> ${jogador5} - ${jogador2} </td></tr>`
    let prt8 = `<tr><td> ${jogador4} - ${jogador3} </td></tr>  <tr><td> ${jogador2} - ${jogador1} </td></tr>`

    let partidas = [prt1, prt2, prt3, prt4, prt5, prt6, prt7, prt8];

    for (var i = 0; i < partidas.length; i++) {
        document.getElementById(`partida_${i + 1}`).innerHTML = `${partidas[i]}`
    };
};

function jogoCom7() {
    let jogador1 = document.getElementById("jogador_1").value;
    let jogador2 = document.getElementById("jogador_2").value;
    let jogador3 = document.getElementById("jogador_3").value;
    let jogador4 = document.getElementById("jogador_4").value;
    let jogador5 = document.getElementById("jogador_5").value;
    let jogador6 = document.getElementById("jogador_6").value;
    let jogador7 = document.getElementById("jogador_7").value;

    let prt1 = `<tr><td> ${jogador2} - ${jogador1} </td></tr>  <tr><td> ${jogador3} - ${jogador7} </td></tr>`;
    let prt2 = `<tr><td> ${jogador4} - ${jogador6} </td></tr>  <tr><td> ${jogador1} - ${jogador3} </td></tr>`;
    let prt3 = `<tr><td> ${jogador1} - ${jogador3} </td></tr>  <tr><td> ${jogador7} - ${jogador4} </td></tr>`;
    let prt4 = `<tr><td> ${jogador6} - ${jogador5} </td></tr>  <tr><td> ${jogador4} - ${jogador1} </td></tr>`;
    let prt5 = `<tr><td> ${jogador3} - ${jogador2} </td></tr>  <tr><td> ${jogador5} - ${jogador7} </td></tr>`;
    let prt6 = `<tr><td> ${jogador6} - ${jogador1} </td></tr>  <tr><td> ${jogador5} - ${jogador2} </td></tr>`;
    let prt7 = `<tr><td> ${jogador4} - ${jogador3} </td></tr>  <tr><td> ${jogador1} - ${jogador7} </td></tr>`;
    let prt8 = `<tr><td> ${jogador2} - ${jogador6} </td></tr>  <tr><td> ${jogador3} - ${jogador5} </td></tr>`;
    let prt9 = `<tr><td> ${jogador7} - ${jogador2} </td></tr>  <tr><td> ${jogador6} - ${jogador3} </td></tr>`;
    let prt10 = `<tr><td> ${jogador5} - ${jogador4} </td></tr>  <tr><td> ${jogador2} - ${jogador1} </td></tr>`;

    let partidas = [prt1, prt2, prt3, prt4, prt5, prt6, prt7, prt8, prt9, prt10];

    for (var i = 0; i < partidas.length; i++) {
        document.getElementById(`partida_${i + 1}`).innerHTML = `${partidas[i]}`
    };
};

function jogoCom8() {
    let jogador1 = document.getElementById("jogador_1").value;
    let jogador2 = document.getElementById("jogador_2").value;
    let jogador3 = document.getElementById("jogador_3").value;
    let jogador4 = document.getElementById("jogador_4").value;
    let jogador5 = document.getElementById("jogador_5").value;
    let jogador6 = document.getElementById("jogador_6").value;
    let jogador7 = document.getElementById("jogador_7").value;
    let jogador8 = document.getElementById("jogador_8").value;

    let prt1 = `<tr><td> ${jogador2} - ${jogador1} </td></tr>  <tr><td> ${jogador3} - ${jogador7} </td></tr>`;
    let prt2 = `<tr><td> ${jogador4} - ${jogador6} </td></tr>  <tr><td> ${jogador5} - ${jogador8} </td></tr>`;
    let prt3 = `<tr><td> ${jogador1} - ${jogador3} </td></tr>  <tr><td> ${jogador8} - ${jogador2} </td></tr>`;
    let prt4 = `<tr><td> ${jogador7} - ${jogador4} </td></tr>  <tr><td> ${jogador6} - ${jogador5} </td></tr>`;
    let prt5 = `<tr><td> ${jogador4} - ${jogador1} </td></tr>  <tr><td> ${jogador3} - ${jogador2} </td></tr>`;
    let prt6 = `<tr><td> ${jogador5} - ${jogador7} </td></tr>  <tr><td> ${jogador8} - ${jogador6} </td></tr>`;
    let prt7 = `<tr><td> ${jogador1} - ${jogador5} </td></tr>  <tr><td> ${jogador2} - ${jogador4} </td></tr>`;
    let prt8 = `<tr><td> ${jogador3} - ${jogador8} </td></tr>  <tr><td> ${jogador7} - ${jogador6} </td></tr>`;
    let prt9 = `<tr><td> ${jogador6} - ${jogador1} </td></tr>  <tr><td> ${jogador5} - ${jogador2} </td></tr>`;
    let prt10 = `<tr><td> ${jogador4} - ${jogador3} </td></tr>  <tr><td> ${jogador8} - ${jogador7} </td></tr>`;
    let prt11 = `<tr><td> ${jogador1} - ${jogador7} </td></tr>  <tr><td> ${jogador2} - ${jogador6} </td></tr>`;
    let prt12 = `<tr><td> ${jogador3} - ${jogador5} </td></tr>  <tr><td> ${jogador4} - ${jogador8} </td></tr>`;
    let prt13 = `<tr><td> ${jogador8} - ${jogador1} </td></tr>  <tr><td> ${jogador7} - ${jogador2} </td></tr>`;
    let prt14 = `<tr><td> ${jogador6} - ${jogador3} </td></tr>  <tr><td> ${jogador5} - ${jogador4} </td></tr>`;

    let partidas = [prt1, prt2, prt3, prt4, prt5, prt6, prt7, prt8, prt9, prt10, prt11, prt12, prt13, prt14];

    for (var i = 0; i < partidas.length; i++) {
        document.getElementById(`partida_${i + 1}`).innerHTML = `${partidas[i]}`
    };
};

function jogoCom9() {
    let jogador1 = document.getElementById("jogador_1").value;
    let jogador2 = document.getElementById("jogador_2").value;
    let jogador3 = document.getElementById("jogador_3").value;
    let jogador4 = document.getElementById("jogador_4").value;
    let jogador5 = document.getElementById("jogador_5").value;
    let jogador6 = document.getElementById("jogador_6").value;
    let jogador7 = document.getElementById("jogador_7").value;
    let jogador8 = document.getElementById("jogador_8").value;
    let jogador9 = document.getElementById("jogador_9").value;

    let prt1 = `<tr><td> ${jogador2} - ${jogador1} </td></tr>   <tr><td> ${jogador3} - ${jogador9} </td></tr>`;
    let prt2 = `<tr><td> ${jogador4} - ${jogador8} </td></tr>   <tr><td> ${jogador5} - ${jogador7} </td></tr>`;
    let prt3 = `<tr><td> ${jogador1} - ${jogador3} </td></tr>   <tr><td> ${jogador9} - ${jogador4} </td></tr>`;
    let prt4 = `<tr><td> ${jogador8} - ${jogador5} </td></tr>   <tr><td> ${jogador7} - ${jogador6} </td></tr>`;
    let prt5 = `<tr><td> ${jogador4} - ${jogador1} </td></tr>   <tr><td> ${jogador3} - ${jogador2} </td></tr>`;
    let prt6 = `<tr><td> ${jogador5} - ${jogador9} </td></tr>   <tr><td> ${jogador6} - ${jogador8} </td></tr>`;
    let prt7 = `<tr><td> ${jogador1} - ${jogador5} </td></tr>   <tr><td> ${jogador2} - ${jogador4} </td></tr>`;
    let prt8 = `<tr><td> ${jogador9} - ${jogador6} </td></tr>   <tr><td> ${jogador8} - ${jogador7} </td></tr>`;
    let prt9 = `<tr><td> ${jogador6} - ${jogador1} </td></tr>   <tr><td> ${jogador5} - ${jogador2} </td></tr>`;
    let prt10 = `<tr><td> ${jogador4} - ${jogador3} </td></tr>   <tr><td> ${jogador7} - ${jogador9} </td></tr>`;
    let prt11 = `<tr><td> ${jogador1} - ${jogador7} </td></tr>   <tr><td> ${jogador2} - ${jogador6} </td></tr>`;
    let prt12 = `<tr><td> ${jogador3} - ${jogador5} </td></tr>   <tr><td> ${jogador9} - ${jogador8} </td></tr>`;
    let prt13 = `<tr><td> ${jogador8} - ${jogador1} </td></tr>   <tr><td> ${jogador7} - ${jogador2} </td></tr>`;
    let prt14 = `<tr><td> ${jogador6} - ${jogador3} </td></tr>   <tr><td> ${jogador5} - ${jogador4} </td></tr>`;
    let prt15 = `<tr><td> ${jogador1} - ${jogador9} </td></tr>   <tr><td> ${jogador2} - ${jogador8} </td></tr>`;
    let prt16 = `<tr><td> ${jogador3} - ${jogador7} </td></tr>   <tr><td> ${jogador4} - ${jogador6} </td></tr>`;
    let prt17 = `<tr><td> ${jogador9} - ${jogador2} </td></tr>   <tr><td> ${jogador8} - ${jogador3} </td></tr>`;
    let prt18 = `<tr><td> ${jogador7} - ${jogador4} </td></tr>   <tr><td> ${jogador6} - ${jogador5} </td></tr>`;

    let partidas = [prt1, prt2, prt3, prt4, prt5, prt6, prt7, prt8, prt9, prt10, prt11, prt12, prt13, prt14, prt15, prt16, prt17, prt18];

    for (var i = 0; i < partidas.length; i++) {
        document.getElementById(`partida_${i + 1}`).innerHTML = `${partidas[i]}`
    };
};

function jogoCom10() {
    let jogador1 = document.getElementById("jogador_1").value;
    let jogador2 = document.getElementById("jogador_2").value;
    let jogador3 = document.getElementById("jogador_3").value;
    let jogador4 = document.getElementById("jogador_4").value;
    let jogador5 = document.getElementById("jogador_5").value;
    let jogador6 = document.getElementById("jogador_6").value;
    let jogador7 = document.getElementById("jogador_7").value;
    let jogador8 = document.getElementById("jogador_8").value;
    let jogador9 = document.getElementById("jogador_9").value;
    let jogador10 = document.getElementById("jogador_10").value;

    let prt1 = `<tr><td> ${jogador2} - ${jogador1}</td></tr>   <tr><td> ${jogador3} - ${jogador9}</td></tr>`;
    let prt2 = `<tr><td> ${jogador4} - ${jogador8}</td></tr>   <tr><td> ${jogador5} - ${jogador7}</td></tr>`;
    let prt3 = `<tr><td> ${jogador6} - ${jogador10}</td></tr>  <tr><td> ${jogador1} - ${jogador3}</td></tr>`;
    let prt4 = `<tr><td> ${jogador9} - ${jogador4}</td></tr>   <tr><td> ${jogador8} - ${jogador5}</td></tr>`;
    let prt5 = `<tr><td> ${jogador7} - ${jogador6}</td></tr>   <tr><td> ${jogador10} - ${jogador2}</td></tr> `;
    let prt6 = `<tr><td> ${jogador4} - ${jogador1}</td></tr>   <tr><td> ${jogador3} - ${jogador2}</td></tr> `;
    let prt7 = `<tr><td> ${jogador5} - ${jogador9}</td></tr>   <tr><td> ${jogador6} - ${jogador8}</td></tr>`;
    let prt8 = `<tr><td> ${jogador7} - ${jogador10}</td></tr>  <tr><td> ${jogador1} - ${jogador5}</td></tr>`;
    let prt9 = `<tr><td> ${jogador2} - ${jogador4}</td></tr>   <tr><td> ${jogador9} - ${jogador6}</td></tr>`;
    let prt10 = `<tr><td> ${jogador8} - ${jogador7}</td></tr>  <tr><td> ${jogador10} - ${jogador3}</td></tr>`;
    let prt11 = `<tr><td> ${jogador6} - ${jogador1}</td></tr>  <tr><td> ${jogador5} - ${jogador2}</td></tr> `;
    let prt12 = `<tr><td> ${jogador4} - ${jogador3}</td></tr>  <tr><td> ${jogador7} - ${jogador9}</td></tr>`;
    let prt13 = `<tr><td> ${jogador8} - ${jogador10}</td></tr> <tr><td> ${jogador1} - ${jogador7}</td></tr>`;
    let prt14 = `<tr><td> ${jogador2} - ${jogador6}</td></tr>  <tr><td> ${jogador3} - ${jogador5}</td></tr>`;
    let prt15 = `<tr><td> ${jogador9} - ${jogador8}</td></tr>  <tr><td> ${jogador10} - ${jogador4}</td></tr>`;
    let prt16 = `<tr><td> ${jogador8} - ${jogador1}</td></tr>  <tr><td> ${jogador7} - ${jogador2}</td></tr> `;
    let prt17 = `<tr><td> ${jogador6} - ${jogador3}</td></tr>  <tr><td> ${jogador5} - ${jogador4}</td></tr>`;
    let prt18 = `<tr><td> ${jogador9} - ${jogador10}</td></tr> <tr><td> ${jogador1} - ${jogador2}</td></tr>`;
    let prt19 = `<tr><td> ${jogador9} - ${jogador8}</td></tr>  <tr><td> ${jogador3} - ${jogador7}</td></tr>`;
    let prt20 = `<tr><td> ${jogador4} - ${jogador6}</td></tr>  <tr><td> ${jogador10} - ${jogador5}</td></tr>`;
    let prt21 = `<tr><td> ${jogador9} - ${jogador2}</td></tr>  <tr><td> ${jogador8} - ${jogador3}</td></tr>`;
    let prt22 = `<tr><td> ${jogador7} - ${jogador4}</td></tr>  <tr><td> ${jogador6} - ${jogador5}</td></tr>`;
    let prt23 = `<tr><td> ${jogador1} - ${jogador10}</td></tr> <tr><td> ${jogador3} - ${jogador9}</td></tr>`;


    let partidas = [prt1, prt2, prt3, prt4, prt5, prt6, prt7, prt8, prt9, prt10, prt11, prt12, prt13, prt14, prt15, prt16, prt17, prt18, prt19, prt20, prt21, prt22, prt23];

    for (var i = 0; i < partidas.length; i++) {
        document.getElementById(`partida_${i + 1}`).innerHTML = `${partidas[i]}`
    };
};
