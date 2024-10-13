//---------- Glosario de nomenclaturas ------------
/**
 * 1ª letra es el ámbito: [ local(l), global(g), argumento(a) ]
 * 2ª letra es el tipo de dato: [boolean(b), String(s), Number(n), Double(d), objeto(o)...]
 * 3ª letra(opcional), complementa el tipo de dato [BigInt(bi)...]
 * Variable de retorno -> _rt
 * Ejemplo: let ls_cadena = "ejemplo"
 */


// --------- Declaracion de funciones ---------

/**
 * ? EJERCICIO 4. UNIÓN DE ARRAYS
 */

/**
 * @description: Acepta un número variable de arrays y los combina en uno solo.
 * @param {Object} aoArr
 * @returns {Object}
 *
 */
export const unirArrays = (...aoArr) => {
    return aoArr.reduce((acumulador, actual) => acumulador.concat(actual));
  };