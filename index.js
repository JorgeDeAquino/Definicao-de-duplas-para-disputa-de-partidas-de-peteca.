const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const nDeJogadores = document.querySelector('#quantidade-de-jogadores-select').value;
    console.log(nDeJogadores);

    if(nDeJogadores == 5) {
        console.log('5 jogadores');
    } else if (nDeJogadores == 6) {
        console.log('6 jogadores');
    } else if (nDeJogadores == 7) {
        console.log('7 jogadores')
    } else if (nDeJogadores == 8) {
        console.log('8 jogadores')
    } else if (nDeJogadores == 9) {
        console.log('9 jogadores')
    } else if (nDeJogadores == 10) {
        console.log('10 jogadores')
    } else {
        alert('opção invalida, selecione a quantidade de jogadores.')
    }

    window.location.href = "cadastro-jogadores.html";
  });

  