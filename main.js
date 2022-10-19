//Botão e seletor de quantidade de jogadores
const btn = document.getElementById("selecao-btn");

btn.addEventListener("click", function () {
    const nDeJogadores = document.querySelector('#quantidade__jogadores-select').value;

    if (nDeJogadores == 5) {
        aparecerLabels5Jgd();
        aparecerJogos5()
        aparecerBotaoJogadores()
    } else if (nDeJogadores == 6) {
        aparecerLabels6Jgd()
        aparecerJogos6()
        aparecerBotaoJogadores()
    } else if (nDeJogadores == 7) {
        aparecerLabels7Jgd()
        aparecerJogos7()
        aparecerBotaoJogadores()
    } else if (nDeJogadores == 8) {
        aparecerLabels8Jgd()
        aparecerJogos8()
        aparecerBotaoJogadores()
    } else if (nDeJogadores == 9) {
        aparecerLabels9Jgd()
        aparecerJogos9()
        aparecerBotaoJogadores()
    } else if (nDeJogadores == 10) {
        aparecerLabels10Jgd()
        aparecerJogos10()
        aparecerBotaoJogadores()
    } else {
        alert('opção invalida, selecione a quantidade de jogadores.')
    }
  
});

//função para aparecer o botão de cadastrar os jogadores ao clicar
function aparecerBotaoJogadores() {
    const labelBotaoJogadores = document.querySelector('.hide__botao__jogar');
    labelBotaoJogadores.classList.remove('hide__botao__jogar');
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

//função para definir jogos apos preenchimento dos campos
const btnJogar = document.getElementById("btn-jogar");

btnJogar.addEventListener("click", function () {
    if (habilitarJogadores == 5) {
        jogoCom5()
    } else if (habilitarJogadores == 6) {
        jogoCom6()
    }else if (habilitarJogadores == 7) {
        jogoCom7()
    }else if (habilitarJogadores == 8) {
        jogoCom8()
    }else if (habilitarJogadores == 9) {
        jogoCom9()
    }else if (habilitarJogadores == 10) {
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


    let prt1 = `<tr><td> ${jogador2} - ${jogador1} </td></tr>  <tr><td>${jogador3} - ${jogador5}</td></tr>`;
    let prt2 = `<tr><td> ${jogador1} - ${jogador3} </td></tr>  <tr><td>${jogador5} - ${jogador4}</td></tr>`;
    let prt3 = `<tr><td> ${jogador4} - ${jogador1} </td></tr>  <tr><td>${jogador3} - ${jogador2}</td></tr>`;
    let prt4 = `<tr><td> ${jogador1} - ${jogador5} </td></tr>  <tr><td>${jogador2} - ${jogador4}</td></tr>`;
    let prt5 = `<tr><td> ${jogador5} - ${jogador2} </td></tr>  <tr><td>${jogador4} - ${jogador3}</td></tr>`;

    document.getElementById("partida_1").innerHTML = `${prt1}`;
    document.getElementById("partida_2").innerHTML = `${prt2}`;
    document.getElementById("partida_3").innerHTML = `${prt3}`;
    document.getElementById("partida_4").innerHTML = `${prt4}`;
    document.getElementById("partida_5").innerHTML = `${prt5}`;
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

    document.getElementById("partida_1").innerHTML = `${prt1}`;
    document.getElementById("partida_2").innerHTML = `${prt2}`;
    document.getElementById("partida_3").innerHTML = `${prt3}`;
    document.getElementById("partida_4").innerHTML = `${prt4}`;
    document.getElementById("partida_5").innerHTML = `${prt5}`;
    document.getElementById("partida_6").innerHTML = `${prt6}`;
    document.getElementById("partida_7").innerHTML = `${prt7}`;
    document.getElementById("partida_8").innerHTML = `${prt8}`;
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

    document.getElementById("partida_1").innerHTML = `${prt1}`;
    document.getElementById("partida_2").innerHTML = `${prt2}`;
    document.getElementById("partida_3").innerHTML = `${prt3}`;
    document.getElementById("partida_4").innerHTML = `${prt4}`;
    document.getElementById("partida_5").innerHTML = `${prt5}`;
    document.getElementById("partida_6").innerHTML = `${prt6}`;
    document.getElementById("partida_7").innerHTML = `${prt7}`;
    document.getElementById("partida_8").innerHTML = `${prt8}`;
    document.getElementById("partida_9").innerHTML = `${prt9}`;
    document.getElementById("partida_10").innerHTML = `${prt10}`;
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

    document.getElementById("partida_1").innerHTML = `${prt1}`;
    document.getElementById("partida_2").innerHTML = `${prt2}`;
    document.getElementById("partida_3").innerHTML = `${prt3}`;
    document.getElementById("partida_4").innerHTML = `${prt4}`;
    document.getElementById("partida_5").innerHTML = `${prt5}`;
    document.getElementById("partida_6").innerHTML = `${prt6}`;
    document.getElementById("partida_7").innerHTML = `${prt7}`;
    document.getElementById("partida_8").innerHTML = `${prt8}`;
    document.getElementById("partida_9").innerHTML = `${prt9}`;
    document.getElementById("partida_10").innerHTML = `${prt10}`;
    document.getElementById("partida_11").innerHTML = `${prt11}`;
    document.getElementById("partida_12").innerHTML = `${prt12}`;
    document.getElementById("partida_13").innerHTML = `${prt13}`;
    document.getElementById("partida_14").innerHTML = `${prt14}`;
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

    document.getElementById("partida_1").innerHTML = `${prt1}`;
    document.getElementById("partida_2").innerHTML = `${prt2}`;
    document.getElementById("partida_3").innerHTML = `${prt3}`;
    document.getElementById("partida_4").innerHTML = `${prt4}`;
    document.getElementById("partida_5").innerHTML = `${prt5}`;
    document.getElementById("partida_6").innerHTML = `${prt6}`;
    document.getElementById("partida_7").innerHTML = `${prt7}`;
    document.getElementById("partida_8").innerHTML = `${prt8}`;
    document.getElementById("partida_9").innerHTML = `${prt9}`;
    document.getElementById("partida_10").innerHTML = `${prt10}`;
    document.getElementById("partida_11").innerHTML = `${prt11}`;
    document.getElementById("partida_12").innerHTML = `${prt12}`;
    document.getElementById("partida_13").innerHTML = `${prt13}`;
    document.getElementById("partida_14").innerHTML = `${prt14}`;
    document.getElementById("partida_15").innerHTML = `${prt15}`;
    document.getElementById("partida_16").innerHTML = `${prt16}`;
    document.getElementById("partida_17").innerHTML = `${prt17}`;
    document.getElementById("partida_18").innerHTML = `${prt18}`;
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


    document.getElementById("partida_1").innerHTML = `${prt1}`;
    document.getElementById("partida_2").innerHTML = `${prt2}`;
    document.getElementById("partida_3").innerHTML = `${prt3}`;
    document.getElementById("partida_4").innerHTML = `${prt4}`;
    document.getElementById("partida_5").innerHTML = `${prt5}`;
    document.getElementById("partida_6").innerHTML = `${prt6}`;
    document.getElementById("partida_7").innerHTML = `${prt7}`;
    document.getElementById("partida_8").innerHTML = `${prt8}`;
    document.getElementById("partida_9").innerHTML = `${prt9}`;
    document.getElementById("partida_10").innerHTML = `${prt10}`;
    document.getElementById("partida_11").innerHTML = `${prt11}`;
    document.getElementById("partida_12").innerHTML = `${prt12}`;
    document.getElementById("partida_13").innerHTML = `${prt13}`;
    document.getElementById("partida_14").innerHTML = `${prt14}`;
    document.getElementById("partida_15").innerHTML = `${prt15}`;
    document.getElementById("partida_16").innerHTML = `${prt16}`;
    document.getElementById("partida_17").innerHTML = `${prt17}`;
    document.getElementById("partida_18").innerHTML = `${prt18}`;
    document.getElementById("partida_19").innerHTML = `${prt19}`;
    document.getElementById("partida_20").innerHTML = `${prt20}`;
    document.getElementById("partida_21").innerHTML = `${prt21}`;
    document.getElementById("partida_22").innerHTML = `${prt22}`;
    document.getElementById("partida_23").innerHTML = `${prt23}`;
};