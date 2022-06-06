// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let resultado = 10;
    numero = 10;
while (true) {
    resultado = resultado * (numero - 1);
    numero--
    if (numero <= 2) {
        break;
    }
}
console.log(resultado);