/**
 * EJERCICIO 15
 * @description - invierte una cadena.
 * @param {string} 
 * @returns - devuelve la cadena invertida
 * */
export const invertirCadena=(cadena)=> typeof cadena === 'string' ? cadena.split("").reduce((acc, char) => char + acc, "") : "Tiene que introducir un string";
