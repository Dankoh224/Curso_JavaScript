// Las funciones CallBack son aquellas que llaman a otras funciones.
// En el siguiente ejemplo definimos una función con 3 parámetros. El 
// tercero es la función:
function comprar(articulo1,articulo2,funcion) {
    articulo1 = 12;
    articulo2 = 13;
    let gastado = articulo1 + articulo2;
    funcion (gastado);
    // Y es en esta línea de código, donde el programa reemplaza la función
    // "funcion" por la función "imprimir" que escribí abajo, agregándole
    // por su puesto el parámetro.
}
function imprimir (mensaje) {
    console.log(`Compramos leche y pan y gastamos ${mensaje} pesos.`);
}
// Ahora, al llamar a la función y agregar en el tercer parámetro la función
// imprimir, esta función llamará a comprar y ya sabemos que dentro de 
// comprar estará esperando ser llamada la función imprimir.
comprar("leche","pan",imprimir);

// Veamos otro ejemplo:
mensaje("Ricardo","Sebastián",totalCena)

function mensaje(nombre1, nombre2, funcion) {
    total1 = 32;
    total2 = 45;
    total = total1 + total2
    funcion(nombre1,nombre2,total);
}
function totalCena(nombre1,nombre2,total) {
    console.log(`La cena entre ${nombre1} y ${nombre2} costó ${total} pesos.`);
}
mensaje("Ximena","Manuel",totalCena)
// OBSERVACIÓN: el orden al llamar a las funciones si se respeta al ser
// impreso en pantalla.