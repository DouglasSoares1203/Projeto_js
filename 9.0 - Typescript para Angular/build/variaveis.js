//tipos primitivos: boolean, number, string
var ligado = false;
var nome = "Douglas";
var idade = 30;
var altura = 1.9;
// tipos especiais null, undefined
var nulo = null;
var indefinido = undefined;
//tipos abrangentes: any, void
var retorno;
var retornoView = false;
//objeto - sem previsibilidade
var produto = {
    name: "Doug",
    cidade: "sp",
    idade: 30
};
var meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5
};
//Arrays
var dados = ["felipe", "ana", "adriana"];
var dados2 = ["felipe", "ana", "adriana"];
var infos = [322, "felipe"];
/**
 * Tuplas
 */
var boleto = ["agua conta", 199.9, 32342342];
/**
 * arrays métodos (são os mesmos do Javascript)
 */
dados.pop();
/**
 * Datas
 */
var aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
