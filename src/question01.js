import leia from "readline-sync"


var texto = "";
var vogais = ["a", "e", "i", "o", "u"];
var vogaisEncontradas = [];

texto = leia.question("Digite uma palavra ou texto: ");

for (var i = 0; i < texto.length; i++) {
    for (var j = 0; j < vogais.length; j++) {
        if (texto[i] === vogais[j]) { 
            vogaisEncontradas.push(texto[i]); 
        }
    }
}

console.log("Vogais encontradas:", vogaisEncontradas+(", "));
