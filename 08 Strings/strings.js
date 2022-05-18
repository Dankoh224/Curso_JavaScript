//CONCATENADOS:
let nombre,
    apellido,
    nombreCompleto,
    espacio;
nombre = "Danko";
apellido = "Valderrama";
nombreCompleto = nombre + apellido;
espacio = " ";

//Imprimiremos contatenados de 4 formas distintas:
//1) Definir una variable y en ella realizar el concatenado, luego solo imprimimos la variable:
console.log(nombreCompleto);

//2) Escribimos las variables y las concatenamos con el símbolo (+):
console.log(nombre + apellido);
//Nota: en ambos casos falta un espacio para separar ambas palabras. Esto se puede arreglar de
//varias formas distintas. Por ejemplo agregando una variable en el centro en la que haya un espacio:
console.log(nombre + espacio + apellido);
console.log(nombre + " " + apellido);

//3) La tercera concatenación es usando comas para separar las variables, sin embargo esto genera
//automáticamente un espacio entre medio:
console.log(nombre, apellido);

//4) Y la última forma es usando backticks `` (tecla abrir corchete + espacio):
console.log(`Hola estimado ${nombre}. Su apellido es ${apellido}`);
//Esta opción es la más recomendada y puede seguir concatenándose dentro de ${}.