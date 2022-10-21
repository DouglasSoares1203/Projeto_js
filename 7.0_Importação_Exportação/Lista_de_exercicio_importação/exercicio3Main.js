const {gets, print} = require('./exercicio3')

let elements = []
let pares = []

for (let index = 0; index < 6; index++) {
    const element = gets();
    elements.push(element)
    if (element % 2 == 0) {
        pares.push(element)
    }
    
}

console.log(`Números Pares: ${pares}`)