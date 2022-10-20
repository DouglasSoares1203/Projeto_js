class Carro{
    marca;
    cor;
    gastoMedioPorLitro;

    constructor(marca,cor,gastoMedioPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorLitro = gastoMedioPorLitro;


    }

    calcularGastoMedioDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorLitro * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoMedioDePercurso(70,5));
const palio = new Carro('Palio', 'Preto', 1 / 10);
console.log(uno.calcularGastoMedioDePercurso(70,5));