var personagem = document.querySelectorAll(".personagem");

var pesoEhValido = true;
var alturaEhValida = true;

// function calculaImc(peso, altura) {
//     var imc = 0;
//     imc = peso / (altura * altura);
//     return imc.toFixed(2);
// }

function calculaVic (partidas, winRate) {
    var vitorias = (partidas * winRate/100);
    return Math.round(vitorias);
}

function calculaDerrota(partidas, vitorias) {
    var derrotas = 0;
    derrotas = (partidas - vitorias);
    return derrotas;
}

function faltando (partida, winRateDesejavel, vitoria) {

    var faltam = (((partida * winRateDesejavel/100) - vitoria) / (1 - winRateDesejavel/100));
    return Math.round(faltam);

}

for(i = 0; i < personagem.length; i++){


    pesoEhValido = true;
    alturaEhValida = true;
    var personagens = personagem[i];

    var tdPartidas = personagens.querySelector(".info-partida");
    var tdWinRate = personagens.querySelector(".info-TVAtual");

    var tdVitorias = personagens.querySelector(".info-vitoria");
    var tdDerrotas = personagens.querySelector(".info-derrota");
    var tdWinRateDesejavel = personagens.querySelector(".info-winrate_desejado");
    var tdVitCons = personagens.querySelector(".info-vitorias_consecutivas");
    
    var partidas = tdPartidas.textContent;
    var winRate = tdWinRate.textContent;
    var winRateDesejavel = 70;
    var vitorias = calculaVic(partidas, winRate);



    tdVitorias.textContent = vitorias;
    tdDerrotas.textContent = calculaDerrota(partidas, vitorias);
    tdWinRateDesejavel.textContent = winRateDesejavel; // mutável!
    tdVitCons.textContent = faltando(partidas, winRateDesejavel, vitorias);

    

    // if(peso <= 0 || peso >= 1000){
    //     console.log("peso inválido!");
    //     alturaEhValida = false;
    //     tdImc.textContent = "Peso inválido!";
    //     paciente.classList.add("paciente-invalido");
    // }
    
    // if(altura <= 0 || altura >= 3.0){
    //     console.log("altura inválida!");
    //     pesoEhValido = false;
    //     tdImc.textContent = "Altura inválida!";
    //     paciente.classList.add("paciente-invalido");
    // }
    
    // if(alturaEhValida == false && pesoEhValido == false){
    //     console.log("altura e peso inválidos!");
    //     tdImc.textContent = "Peso e altura inválidos!";
    //     paciente.classList.add("paciente-invalido");
    // }
    
    // if(pesoEhValido && alturaEhValida){
    //     tdImc.textContent = imc;
    // }
}








