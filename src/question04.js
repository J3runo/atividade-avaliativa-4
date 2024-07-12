import leia from "readline-sync"


    
var nome = leia.question("Nome: ");
var qtdGols = parseInt(leia.question("Quantidade de gols: "));
var qtdPCertos = parseInt(leia.question("Quantidade de passes certos: "));
var qtdPerrados = parseInt(leia.question("Quantidade de passes errados: "));


var pontuacaoGols = qtdGols * 50;
var pontuacaoPassesC = qtdPCertos * 10;
var pontuacaoPassesE = qtdPerrados * -5;
var total = pontuacaoGols + pontuacaoPassesC +pontuacaoPassesE

if (pontuacaoGols < 50) {
    console.log(nome+ " teve uma péssima partida.");
} else if (total >= 50 && total < 100) {
    console.log(nome+ " teve uma partida ruim.");
} else if (total >= 100 && total < 150) {
    console.log(nome + " fez o básico na partida.");
} else if (total >= 150 && total < 200) {
    console.log(nome+ " foi bem na partida.");
} else {
    console.log(nome+ " jogou demais!");
}
