// En JS esxisten dos tipos de bucles.

// 1) El bucle while comun y corriente (igual que en python).

let i = 0; // <--- contador
let max = 10; // <--- variable tope para la condición
while (i < max) { // <--- condición
    console.log(i);
    i += 1
}

// El otro tipo de bucle es el do while. Este bucle sirve para ingresar al bucle en la primera ocasión, cumpla o no cumpla la condición:
let e = 14;
let tope = 10
do {
    console.log(e);
    e += 1
} while (e < tope)
