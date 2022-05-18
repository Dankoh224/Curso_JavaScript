/* Los operadores unarios incrementan o decrementan un valor unitariamente, es decir,
suman 1 o restan 1 a una variable. Especialmente útil para usar como contadores en bucles.*/
//ejemplo:

let a = 3;
a++;
console.log(a);

let b = 7;
b--;
console.log(b);

//También se puede escribir ++a o --a, sin embargo el orden de tipeo condiciona la impresion de la
//variable:
//Si el orden de impresión es a++, el programa imprime a y luego le agrega 1. Por eso la segunda
//línea del ejemplo sigue siendo 4:
console.log(a);
console.log(a++);
console.log(a);
//Pero al hacerlo al revés, el programa agrega 1 y luego imprime a:
console.log(a);
console.log(++a);
console.log(a);