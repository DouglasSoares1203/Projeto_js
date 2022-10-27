//generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}
var numArray = concatArray<number[]>([1, 5], [3]);
var stgArray = concatArray<string[]>(["felipe", "goku", ""], ["vegeta"]);
console.log(numArray);
console.log(stgArray);
