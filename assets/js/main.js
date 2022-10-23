//seleção de elementos

const btnJogar = document.getElementById("selecao-btn");

const mostrarExibJogadores = document.querySelector(".exibicao__jogadores");

const btnReset = document.getElementById("btn-reset");

const btnNovaSelecao = document.getElementById("btn__nova__selecao");

const btnDefinir = document.getElementById("btn-definir");

//array de labels de jogadores
const labelsJogadores = document.querySelectorAll('.exibicao__jogadores-jogador');

const elementosEscondidos = document.querySelectorAll('.hide-definicao');

let habilitarJogadores = "";

let nDeJogadores = "";

//eventos

//selecao-btn(Jogar)

btnJogar.addEventListener("click", function () {
    nDeJogadores = document.querySelector('#quantidade__jogadores-select').value
    
    if (nDeJogadores == 5) {
        mostrarDivExibicao()
        aparecerLabels5Jgd()
        aparecerBotaoJogadores()
        desabilitarSelecaoJogadores()
        return(nDeJogadores)
    } else if (nDeJogadores == 6) {
        aparecerBotaoJogadores()
        mostrarDivExibicao()
        aparecerLabels6Jgd()
        desabilitarSelecaoJogadores()
        return(6)
    } else if (nDeJogadores == 7) {
        aparecerLabels7Jgd()
        aparecerBotaoJogadores()
        mostrarDivExibicao()
        desabilitarSelecaoJogadores()
        return(nDeJogadores)
    } else if (nDeJogadores == 8) {
        aparecerLabels8Jgd()
        aparecerBotaoJogadores()
        mostrarDivExibicao()
        desabilitarSelecaoJogadores()
        return(nDeJogadores)
    } else if (nDeJogadores == 9) {
        aparecerLabels9Jgd()
        aparecerBotaoJogadores()
        mostrarDivExibicao()
        desabilitarSelecaoJogadores()
        return(nDeJogadores)
    } else if (nDeJogadores == 10) {
        aparecerLabels10Jgd()
        aparecerBotaoJogadores()
        mostrarDivExibicao()
        desabilitarSelecaoJogadores()
        return(nDeJogadores)
    } else {
        alert('opção invalida, selecione a quantidade de jogadores.')
    }

    
});

//recarregar a pagina
btnReset.addEventListener("click", function () {
    location.reload();
});


//definição de confrontos
btnDefinir.addEventListener("click", function () {
    desabilitarExibicaoJogadores()
    if (nDeJogadores == 5) {
        aparecerJogos5()
        jogoCom5()
    } else if (nDeJogadores == 6) {
        aparecerJogos6()
        jogoCom6()
    } else if (nDeJogadores == 7) {
        aparecerJogos7()
        jogoCom7()
    } else if (nDeJogadores == 8) {
        aparecerJogos8()
        jogoCom8()
    } else if (nDeJogadores == 9) {
        aparecerJogos9()
        jogoCom9()
    } else if (nDeJogadores == 10) {
        aparecerJogos10()
        jogoCom10()
    }
    aparecerBotaoNovaSelecao()
});

btnNovaSelecao.addEventListener("click", function () {
    location.reload();
});


//funções

function desabilitarSelecaoJogadores() {
    document.querySelector(".selecao__jogadores").classList.add('hide__selecao__jogadores');
}

function desabilitarExibicaoJogadores() {
    document.querySelector(".exibicao__jogadores").classList.add('hide__jogadores');
    document.querySelector(".selecao__exibicao").classList.add('hide__selecao__exibicao');
}

//ao clicar em jogar aparece os botoes juntos com as labels
function aparecerBotaoJogadores() {
    document.querySelector('#btn-definir').classList.remove('hide__botao__definir');
    document.querySelector('#btn-reset').classList.remove('hide__botao__reset');
}

function aparecerBotaoNovaSelecao() {
    document.querySelector('.botao__nova__selecao').classList.remove('hide__btn__nova__selecao');
}

//exibe div exibição jogadores
function mostrarDivExibicao() {
    mostrarExibJogadores.classList.remove('hide__jogadores');
}

//liberação do numero exato apos escolha de jogadores
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


//definição de confrontos aparece na tela
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