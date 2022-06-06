// Una de las librerías de apoyo de JS es Moment.js. No olvidar.
// Los comandos asociados a las fechas son varios, por ejemplo, el siguiente comando es para obtener la hora y fecha de este mismo instante:
const ahora  = new Date();
console.log(ahora);

// Es divertido, porque Quokka va actualizando la hora (segundos) cada vez que escribes cualquier cosa en editor de codigo fuente.

// Segunda forma de uso. La cantidad de milisegundos que existen despues de las 21:00:00 del 31 de diciembre de 1969 (en chile, en EU es desde las 12 de la noche):
const fechaMilisegundos = new Date(0);
console.log(fechaMilisegundos);

// Tercera forma de uso. El amigo del BootCamp no explica para que es esto y no se me ocurre demasiado a mi. Busque en dos paginas y nada. Tal vez otro día.
const fechaCadena = new Date("march 25 2020");
console.log(fechaCadena);

// Cuarta forma de uso: entrega el día y nada más según lo que veo. 
const fechaValores = new Date(2022, 0, 15);
console.log(fechaValores);

// Como la variable ahora es la hora de este mismo momento, get nos dará el valor de cada unidad de medida en el momento mismo en el que sean consultadas.
const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anio = ahora.getFullYear()
// Ademas pueden imprimirse con el formato que queramos
console.log(dia, mes, anio)
