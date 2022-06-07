// Los arrays son igual que en python, no cambia nada más que el let:
let  pc1 = ["Dankocore", 2.6, 8,"T490" ];

// Pero tenemos algo que se llama objetos. También estan "enlistados". Estos objetos poseen atributos y habíamos visto todo lo referido a ello en el capitulo 13:
let pc2 = {
    nombre: "Dankocore",
    ghz: 2.6,
    gb_en_memoria: 8,
    modelo: "T490" 
}
console.log(pc1);
console.log(pc2);


// IMPORTANTE: PARA QUE LAS LLAVES FUNCIONEN COMO EL FORMAT DE PYTHON, SE DEBE USAR COMILLAS DIAGONALES..
let nombre = "danko"
let frase = `el nombre de mi pc es ${nombre}`;
console.log(frase);

// Metodos de Arrays

// Transformadores
// - pop() - elimina el último elemento de un array y lo devuelve.

let pc3 = [ "ococtore", 2.4, 16, "Has-3"];
let listaDePrueba = pc3.pop();
console.log(listaDePrueba);
console.log(pc3);
console.log(pc1);

// - shift() - elimina el primer elemento de un array y lo devuelve.

console.log(pc1);
listaDePrueba = pc1.shift();
console.log(listaDePrueba);
console.log(pc3);
console.log(pc1);

// - push() - agrega uno o más elementos al array al final de la lista y devuelve la longitud del nuevo array.

console.log(pc1);
listaDePrueba = pc1.push("Has-3","Has-4");
console.log(listaDePrueba);
console.log(pc3);
console.log(pc1);

// - reverse() - invierte el orden de los elementos de un array.

console.log(pc1);
listaDePrueba = pc1.reverse();
console.log(listaDePrueba);
console.log(pc1);

// - unshift() - agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

console.log(pc3);
listaDePrueba = pc3.unshift(16,2.4);
console.log(listaDePrueba);
console.log(pc3);

// - sort() - ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

pc1 = [4,2,"holograma",7,5,3,56,"hola",7,4,7]
console.log(pc1);
listaDePrueba = pc1.sort();
console.log(listaDePrueba);
console.log(pc1);

// - splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Sus argumentos son (valor desde el que se iniciará el cambio, cantidad de elementos a los que afectará el cambio) Devuelve array con valores eliminados.

// Se elimina desde la posición 1 en adelante, 2 posiciones: 
console.log(pc1);
listaDePrueba = pc1.splice(1,2);
console.log(listaDePrueba);
console.log(pc1);

// Si elimino un grupo de elementos, puedo reemplazar elementos desde la posición 3 en adelante (en este caso), 5 posiciones: 
console.log(pc1);
listaDePrueba = pc1.splice(3,5,"perro","gato",23);
console.log(listaDePrueba);
console.log(pc1);

// Si no quiero eliminar ningún elemento, desde la posición 1 en adelante (en este caso), 4 posiciones, pero si quiero agregar valores: 
console.log(pc1);
listaDePrueba = pc1.splice(1,0,23,21,100,"check");
console.log(listaDePrueba);
console.log(pc1);

// ¿Y si quiero partir por el último elemento? Para eso partiremos en la posición -1: 

console.log(pc1);
listaDePrueba = pc1.splice(-1,1,"check","check","check","check","check"); // Aquí parto borrando el último valor y agregando check.
console.log(listaDePrueba);
console.log(pc1);


// ¿Y si quisiera borrar los últimos 3 valores? Si quiero agregar después de borrar uso los métodos antes descritos.
console.log(pc1);
listaDePrueba = pc1.splice(-3,3); // Aquí parto borrando los últimos 3 valores y agregando nada.
console.log(listaDePrueba);
console.log(pc1);

// ACCESORES:

// - join() - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve. Lo bakan de este metodo, es que puedo decidir unir los elementos de la cadena mediante el carácter que yo decida, usando como argumento ese carácter. Ejemplo:

console.log(pc3);
let cadenaNueva = pc3.join(" - elemento: ")
console.log("elemento: ",cadenaNueva);

// - slice() - devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).

console.log(pc1);
let cadenaNueva2 = pc1.slice(4,6)
console.log(cadenaNueva2);

// Si quisiera obtener todos los valores desde un inicio hasta el final, puedo usar el valor -1 (obiamente cuenta todos los número exceptuando el último valor):

console.log(pc1);
let cadenaNueva3 = pc1.slice(2,-1,);
console.log(cadenaNueva3);

// - Metodos ya vistos en cadenas: tostring(), index0f(), lastIndexof(), includes()

// tostring(): trasnforma una lista a cadena de caracteres o u número a cadena de caracteres:
let numero = 12;
    lista = ["perro","gato","canario"]
let numeroTransformado = numero.toString()
    listaTransformada = lista.toString()
console.log(numeroTransformado);
console.log(listaTransformada);
console.log(typeof(numeroTransformado));
console.log(typeof(listaTransformada));



// includs(): averigua si el argumento (cadena completa) está incluido en la lista.

console.log(pc1.includes("perro"))

// indexOf(): devuelve el índice del elemento que escribamos como argumento. Solo devuelve índice del primer valor que coincida de la lista.

console.log(pc1);
console.log(pc1.indexOf("check"));
console.log(pc1.indexOf(23));
console.log(pc1.indexOf(12));
console.log(pc1.indexOf("perro"));

// lastIndexOf(): devuelve el índice del elemento que escribamos como argumento. Solo devuelve el índice del ÚLTIMO valor que coincide de la lista.

console.log(pc1);
console.log(pc1.lastIndexOf("check"));
console.log(pc1.lastIndexOf(23));
console.log(pc1.lastIndexOf(12));
console.log(pc1.lastIndexOf("perro"));





// De Repetición 1
// - filter() - crea un nuevo array con todos los elementos que cumplan la condicij
// - forEach() - ejecuta la función indicada una vez por cada elemento del array.

 
// 