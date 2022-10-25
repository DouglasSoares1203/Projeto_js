// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let N = parseInt(gets()); 

// let n = 1 + 8*N; 

//TODO: Retorne a altura máxima que o triângulos de moedas terá


let valorSubtraido = N;
let altura = 0;

for (let i = 1; i < N; i++) {
    if (valorSubtraido - i >= 0) {
        valorSubtraido -= i;
        altura++
    }
    
}

print(altura);