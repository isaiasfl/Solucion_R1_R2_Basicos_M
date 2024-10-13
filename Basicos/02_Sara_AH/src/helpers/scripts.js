/**
 * EJERCICIO 2
 * @descrption - Dado un array de strings, usa reduce para concatenar todos los strings en una sola frase con espacios
entre ellos.
 * @param {array}
 * @returns - Las palabras concatenadas
 */ 

export const concatenarStrings = (arr) => Array.isArray(arr) ? arr.reduce((acc, palabra)=> acc= acc+" "+palabra, " ") : "Tiene que introducir un array";
