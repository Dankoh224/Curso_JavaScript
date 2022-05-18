//PROGRAMACIÓN EN JS
let a = 3;
let b = 5;
let c = 'resultado';
const YEAR = 2021;

// 4) ¿Qué muestra esta línea en la consola?
console.log('resultado');
//R: resultado

//5) ¿Qué valor guarda c? ¿lo puedes ver? ¿cómo?
c = a + b;
console.log(c)
//R: 8, si se puede ver, hay saber que valores tiene a y b 

//6) ¿Qué valor se imprime en consola?
console.log(++c);
//R: 9

//7) ¿Qué valor guarda c ahora?
c += a;
console.log(c)
//R: 12

//8) ¿Qué problema tiene esta línea de código?
//resultado = b + '10';
//R: No esta definida la variables

//9) ¿Qué valor se imprime en la consola?
console.log(a + 'JS');
//R: 3JS

//10) ¿Cuántas variables usamos hasta ahora? ¿Cuáles son sus nombres?
//R: 3, a, b, c

//11) ¿Qué valor se imprime en consola?

let covid19 = 'El año de la pandemia';
let resultado = covid19 + 'YEAR';
console.log(resultado)
//R: El año de la pandemia YEAR

//12) ¿Qué valor se imprime en consola?
//console.log('El año' + (++YEAR) + 'seguro estaremos mejor.');
//R: Error

//BUENAS PRÁCTICAS

//13) var o let?
//R: let

//14) totalAcumulado o TotalAcumulado?
//R: totalAcumulado

//15) const meses = 12; o const MESES = 12;?
//R: const MESES = 12;

//16) constNUMEROPI o NUMERO_PI?
//R: constNUMEROPI

//17) let num = 5 o  let num = 5;?
//R: let num = 5;