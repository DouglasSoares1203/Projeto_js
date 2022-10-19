
const peso = 89;
const altura = 1.70;
const inc = peso / Math.pow(altura, 2);
console.log(inc.toFixed(2));

if (inc < 18.5) {
    console.log('Abaixo do peso');
}else if(inc >= 18.5 && inc < 25) {
    console.log('peso normal');
}else if(inc >= 25 && inc){
    console.log('Acima do peso');
}else if(inc >= 30 && inc < 40 ){
    console.log('Obeso');
}else{
    console.log('Obesidade grave');
}
