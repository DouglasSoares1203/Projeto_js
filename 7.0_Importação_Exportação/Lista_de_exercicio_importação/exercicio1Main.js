const {gets,print} = require('./exercicio1')

let numero = gets();
let array = []

for (let i = 0; i < 10; i++) {
    const multiplicar = numero * i;
    array.push(multiplicar)
    console.log(`${numero}x${i} = ${multiplicar}`);
    
}

