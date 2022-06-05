// JavaScript es un lenguaje orientado a objetos, por lo tanto podemos programar nuestros objetos de la siguiente forma:
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    IsWhite: false,
    contactos: ["Gorka","Martín","Raúl"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: 32,
    }
}

// Para poder acceder a los atributos de el objeto móvil se hace escribiendo el objeto y un punto. Inmediatamente se abrirán la autoescritura dando como opción a los atributos:
console.log(movil.tarjeta);

// En el caso anterior, la impresión está entre llaves, lo que significa que es un objeto. Por lo que si quisieramos acceder al atributo que esta dentro del atributo tarjeta, solo tendríamos que poner otro punto:
console.log(movil.tarjeta.almacenamiento);

// Por otra parte, si quisieramos agregar otro atributo al objeto móvil, no es necesario que volvamos donde están todos los atributos, solo escribiremos lo siguiente:
movil.ano = 2022;
console.log(movil.ano);

// Y de esta misma manera podemos cambiar los atributos de un objeto:
movil.IsWhite = true;
console.log(movil.IsWhite);

// Otra cosa muy importante, es que, si quisieramos agregar un atributo que se escribe con un guión entre dos palabras, no podremos hacerlo sin tenerlo entre comillas. Además, no se puede agregar un nuevo valor de esta forma más adelante, no fuera de las llaves.
persona = {
    altura: 1.43,
    edad: 32,
    "primer-nombre": "danko"
}