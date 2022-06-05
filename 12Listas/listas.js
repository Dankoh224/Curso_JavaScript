// Las listas se pueden definir de dos maneras diferentes. Usando corchetes o usando "new Array()".
const lista = [3,"veinte",true,null];
console.log(lista);

const lista2 = new Array(3,"veinte",true,null);
console.log(lista2);

// Sin embargo aqui hay algo raro. Si a una lista le agregamos solo un número, por ejemplo 3, nos creará una lista vacía con 3 espacios:
const lista3 = new Array(3)
console.log(lista3)
// Aunque queden los espacios vacíos, podríamos asignar elementos. Eso si, debe estar escrito antes del console log, si se hace después, claramente no lo imprimirá:
const lista4 = new Array(4)
lista4[0]= "soy"
lista4[1] = 34
lista4[2] = null
console.log(lista4)
lista4[3] = "espacio"

// Por otro lado, si la lista fue creada con el método de corchetes, creará una lista con un solo objeto, el número 3:
const lista5 = [4]
console.log(lista5)

// LISTAS DE LISTAS
const lista6 = [lista, lista2, lista3, lista4, lista5]
console.log(lista6)