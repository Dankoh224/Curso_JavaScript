//ÁMBITO DE VARIABLE LET --> La más recomendada:
//Siempre hay que definir en primr lugar la variable, luego se le pueden dar otras órdenes
//Por ejemplo, definimos variable:
let numero = 10;
//Luego cambiamos variables las veces que queramos, incluso pasando de variables numéricas a str
numero = 12;
numero = true; 
numero = "gato";
console.log(numero);
//De esta forma podemos decir que la variable es de tipo dinámico, ya que puede pasar de
//variable numérica a texto o a boleano. Luego que definimos la variable con let, podemos
//hacer cambios a esa variable, pero no podemos definir otra variable con el mismo nombre.
//Esto es muy útil a la hora de definir erróneamente otra variable con el mismo nombre.

//AMBITO GLOBAL Y LOCAL: las variables pueden usarse dento de una función o bucle y estas
//estarán usandose en un ambito llamado LOCAL y solo funcionan dentro de ese entorno. Sin
//embargo, también pueden definirse fuera de estos espacios, siendo utilizadas en un ámbito
//GLOBAL.


//AMBITO DE VARIABLE VAR --> La menos recomendada.
var casa = 124;
console.log(casa);
loco = 1234;
console.log(loco);
var casa = 345;
console.log(casa)
//Muy usada en los comienzos pero no en la actualidad. EL problema es que si defines una
//variable y luego defines otra variable con el mismo nombre por error, este nuevo dato
//se sobreescribirá en tu variable anterior.

//DEFINIR VARIABLES Y DESPUÉS USARLAS: para definir sin dar valor escribimos let como sigue:
let a, b, c, d, e;
//Si imprimimos esto indica que esta indefinida la letra a:
console.log(a)
//Sin embargo más adelante se puede asignar un valor a la variable y utilizarla a antojo:
a=3
b=4
c=5
d=6
e=3
console.log(a-b+3*c/d*e)

//CONSTANTE: solo es necesario definirla como se hace a continuación. No se puede redefinir.
const diasSemana = 13;
console.log(diasSemana);