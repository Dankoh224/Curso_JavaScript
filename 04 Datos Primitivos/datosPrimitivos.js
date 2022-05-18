//Para ingresar datos a las variables tenemos que tener claros las siguientes puntos:
//1) No existe diferencia entre número entero y número flotante, todos son datos "Numéricos":
let dato1 = 4;
let dato2 = 3.5;
console.log(dato1 + dato2);
//2) Variables del tipo booleano:
let boolean1 = true;
let boolean0 = false;
console.log(boolean1);
//3) Variables tipo texto (cadena o strings) solo se ingresa entre comillas simples o dobles:
let perro = "perro ";
let gato = 'gato';
console.log(perro + gato);
//Sin embargo si deseo escribir en un texto las comillas dobles, debo partir con las simples:
let ejemplo = 'Hola chicos, como están.. Ahora nos "vamos" a la punta del cerro';
console.log(ejemplo);
//4) Tipo de dato indefinido:
let eme;
console.log(eme)

//CONOCER EL TIPO DE DATO:
console.log(typeof dato1);
console.log(typeof boolean1);
console.log(typeof perro);
console.log(typeof eme);
