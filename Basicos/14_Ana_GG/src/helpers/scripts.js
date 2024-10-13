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
 * ? EJERCICIO 14.
 */
/**
 * @description: Dado un objeto, convierte todas sus claves a mayúsculas utilizando Object.keys y reduce.
 * @param {Object} aoOrders
 * @returns {Object}
 */
export const keyUppercase = (aoOrders = {}) => {
    const loKeys = Object.keys(aoOrders);
  
    return loKeys.reduce((acc, key) => {
      acc[key.toUpperCase()] = aoOrders[key];
      return acc;
    }, {});
  };