const {gets, print} = require('./exercicio2')

const numerosSorteados = []
for (let index = 0; index < 5; index++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}

let menorValor = 1000
let maiorValor = 0
for (let i = 0; i < numerosSorteados.length; i++) {
    let numerosSorteado  = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}

for (let i = 0; i < numerosSorteados.length; i++) {
    let numerosSorteado = numerosSorteados[i];
    if (numerosSorteado < menorValor) {
        menorValor = numerosSorteado;
    }
}

console.log(maiorValor)
console.log(menorValor)