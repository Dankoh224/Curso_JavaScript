let unidades = 0;
let decenas = 0;

bucledecenas: while (true) {
    bucleunidades: while (true) {
        console.log("El númer actual es:",decenas,unidades)
        unidades++;
        if (unidades >= 10) {
            unidades = 0;
            break bucleunidades;
        }
        if (decenas >= 10) {
            break bucledecenas;
        }
    }
    decenas++;
}