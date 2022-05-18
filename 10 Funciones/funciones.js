// FUNCIONES: las funciones en js se usan de la misma manera que en python.
// Sintaxis de una función:
//function nombre (parametro1,parametro2) ¨{
    // En estas lineas se escribe el código a ejecutar.
    // console.log(algo)    no se toma como un valor retornado.
    // return algo          sí toma un valor para retornar (significa que del otro 
    //lado alguien recibirá un dato que previamente fue ingresado en una variable).
//}
// Ejemplo:
function llamarJaimito (compra) {
    console.log("La compra fue exitosa");
    return compra;
}
// La función ya está definida. Ahora para llamarla la guardaremos en una variable
// y luego la imprimiremos en pantalla.
let reciboAlgo = llamarJaimito("aceite");
// Y para retornar usamos el console.log();
console.log("Usted compró",reciboAlgo);

// INGRESAR MAS DE UN PARÁMETRO:
function traeDelSuper (producto1,producto2) {
    console.log("La compra fue exitosa");
    return `Te compre ${producto1} y también ${producto2}`;
}

let hijo = traeDelSuper("Leche","Pan");
console.log(hijo);

// Y al llamarla de nuevo para un tío...
let tio = traeDelSuper("Mani","Pepinillos");
console.log(tio);

// Beneficio Hosting de este tipo de funciones:
// DA LO MISMO DONDE SE ENCUENTRE LA FUNCIÓN, ESTA DEFINIDA DESDE
// UN COMIENZO. Ejemplo:
let nombrePerro = perro("Manuel");
console.log(nombrePerro);
let meruchan = perro("Cris")
function perro(nombre1) {
    console.log("Felicitaciones",nombre1); 
    return (nombre1);
}