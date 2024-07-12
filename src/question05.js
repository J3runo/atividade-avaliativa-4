var vetor = []

var valor = []


for(var i=0; i<36; i++){
    vetor[i] = parseInt(Math.random() * 36) 
}
console.table(vetor)
for(var i=0; i<vetor.length; i++){
    valor[vetor[i]]++
}
console.log(valor)

var porcetLados = []

for(var i=1; i<valor.length;i++){
    porcetLados[i] = 100/vetor.length * valor[i]
}

console.log(porcetLados)
