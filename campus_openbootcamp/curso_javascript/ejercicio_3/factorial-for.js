// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
let numero = 10;
let resultado = 10;
for (let i = 1; i < 10; i += 1) {
    resultado = resultado * (numero - i);
}
console.log(resultado);
