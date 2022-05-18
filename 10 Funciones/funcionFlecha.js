//ASIGNAR UNA FUNCIÓN A UNA VARIABLE Y FUNCIONES FLECHA.
// En JS puedo asignar una función a una variable:
let miFuncion = function (producto) {
    console.log("Compra exitosa");
    return `Compre ${producto} y pan`;
}
let regresaDato = miFuncion("leche");
console.log(regresaDato);
// El único problema de esta manera de crear una función es que no estará
// definida desde un comienzo. No aplica el Beneficio Hosting.

// FUNCIONES FLECHA:
// Estas funciones son casi iguales que las funciones que se alojan dentro 
// de una variable, como la del siguiente ejemplo:
let nombre = function(parametros) {
    //codigo a ejecutar
}
// Observa la función Flecha:
let funcionFlecha = (parametros) => {
    console.log("Esto es una función Flecha.-")
    return parametros
}
let llamar = funcionFlecha("doce")
console.log(llamar)
// Al no usar el comando "return" en la función flecha, al imprimir la
// variable llamar, esta dice que esta indefinida, ya que no devuelve nada.
// Si lo cambias notarás la diferencia. No olvides dejar como estaba.
// OBSERVACIÓN: Como es una función alojada en una variable, tampoco se
// obtiene el beneficio de Hosting.

// Por otra parte la función flecha tiene varios usos para la disminución
// de código:

// 1.- Reduce el código cuando la función usa una sola línea de código:
const funcionSimple = () => console.log("Esto es posible porque es solo una línea de código.");
funcionSimple();

// 2.- Si la función va a utilizar un solo parámetro, no es necesario usar,
// los paréntesis ():
const funcionUnSoloParametro = texto => console.log(texto);
funcionUnSoloParametro("Darko")

// 3.- Si la función tiene varios parámetros y necesitamos hacer cálculos 
// sencillos en una sola línea, no es necesario escribir return. Ejemplo:
const operatoria = (a,b,c,d) => a+b-c*d
console.log(operatoria(3,-5,3,4))
// Pero si necesito complicar esta situación, no me queda otra que escribir
// con las llaves {}.
