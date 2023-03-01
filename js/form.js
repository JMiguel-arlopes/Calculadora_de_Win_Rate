var botaoAdicionar = document.querySelector("#adicionar-personagem");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var formulario = document.querySelector("#form-adiciona");

    var nome = formulario.nome.value;
    var partidas = formulario.partidas.value;
    var winRate = formulario.winRate.value;
    var desejada = formulario.desejada.value;
    

    var personagemTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var partidasTd = document.createElement("td");
    var vitoriasTd = document.createElement("td");
    var derrotasTd = document.createElement("td");
    var winRateTd = document.createElement("td");
    var desejadaTd = document.createElement("td");
    var vitoriasConsecutivasTd = document.createElement("td")

    vitorias = calculaVic(partidas, winRate);

    nomeTd.textContent = nome;
    winRateTd.textContent = winRate;
    partidasTd.textContent = partidas;
    vitoriasTd.textContent = vitorias;
    derrotasTd.textContent = calculaDerrota(partidas, vitorias);
    desejadaTd.textContent = desejada;
    vitoriasConsecutivasTd.textContent = faltando(partidas, desejada, vitorias);
    

    personagemTr.appendChild(nomeTd);
    personagemTr.appendChild(partidasTd);
    personagemTr.appendChild(vitoriasTd);
    personagemTr.appendChild(derrotasTd);
    personagemTr.appendChild(winRateTd);
    personagemTr.appendChild(desejadaTd);
    personagemTr.appendChild(vitoriasConsecutivasTd);

    

    var tabela = document.querySelector("#tabela-personagens");
    tabela.appendChild(personagemTr);
    
})
