// # Tenemos una lista de números y queremos separar los pares de los impares y guardarlos en otras dos listas.
let lista = [2,3,4,5,6,7,8,9,10,11];
    listaPar = [];
    listaImpar = [];
for (let i of lista) {
    if (i % 2 === 0) {
        listaPar.push(i);
    }
    else {
        listaImpar.push(i);
    }
}
console.log(listaPar);
console.log(listaImpar);
