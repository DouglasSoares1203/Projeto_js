const entrada = [4,100,150,90,200];
let i = 0;

function gets() {
    const valor = entrada[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print}