// Tenemos varios tipos de bucle for y while:

// 1) El primero es for(desde que valor, hasta que valor,de cuanto en cuanto). Este método nos genera una lista de números desde un valor inicial hasta un valor final. Es lo mismo que hace el bucle "for range" de python.

for (let i = 0; i < 10; i += 1 ) {
    console.log(i)
}
for (let i = -3; i <= 30; i += 3) {
    console.log(i)
}

// 2) El segundo es acceder a los valor de una lista. Para ello usaremos for(i igual a la posición de inicio de la lista;limite de la lista usando .length;y de cuanto en cuanto aumentaremos este valor). Este método nos entregará todos los valores de una lista.
let lista = [1,5,3,3,5,6];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}
// Es importante notar que a los valores de la lista anteior podemos multiplicarlos sumarlos o lo que sea. Funciona con listas y strings. Ej:
let auto = "toyota"
for (let i = 0; i < auto.length; i += 1) {
    console.log(auto[i])
}

// 3) Estructura for of: Esta estructura es muy parecida a la anterior y reduce un poco el código. Funciona con listas y con strings. Este método es equivalente al for i in "lista" de python.
let animal = "perro"
for (let i of animal) {
    console.log(i);
}

// 4) Estructura forEach: Es otra forma de escribir el mismo código anterior. ¡¡SOLO FUNCIONA CON LISTAS!!
lista.forEach(i => {
    console.log(i);
})

// 5) También esta a estructura for in. Creo que es solo para objetos.
let persona = {
    nombre: "danko",
    edad: 23,
    isDeveloper: true
}

for (let i in persona) {
    console.log(i);
    // Sin embargo, si quisiera acceder a los valores de los atributos de la persona, solo debería escribir dentro del console.log al objeto persona seguido de un corchete y dentro la variable de iteración:
    console.log(persona[i])
}
