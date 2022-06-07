// METODOS DE CADENAS:

// L.concat() - junta dos o mas cadenas y retorna una nueva. Se escribe peculiar y jodidamente igual a python... nicee...
let L = [1,2,3,4];
    L2 = [5,6,7,8];
    L3 = [1,2,3,4];
L = L.concat(L2);
console.log(L);

// - startsWith() - si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
// NO FUNCINA...

// - endsWith() - si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
// NO FUNCIONA... 

// - includes() - si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.
let comienza = L.includes(L3);
console.log(comienza);
// - index0f() - devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1

// - lastIndex0f() - devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1

  
  
 
  
 
 
 

// 1
// - padStart() [propuesta de Estandar] - Rellenar cadena al principio con los cari
// - padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres des
// - repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemc

// - split() - Divide la cadena como le pidamos

// - substring() - Nos retorna un pedazo de la cena que seleccionamos

// - toLowerCase() - Convierte una cadena a minúscula

// - toUpperCase() - Convierte una cadena a mayúscula

// - toString() - método devuelve una cadena que representa al objeto especificado
// - trim() - elimina los espacios en blanco al principio y al final de una cadena