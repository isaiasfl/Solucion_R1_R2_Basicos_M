//Ejercicio 13: Extraer Propiedades
//Enunciado Define una función llamada extraerPropiedades que tome un objeto obj y un array de
//propiedades . La función debe devolver un nuevo objeto que contenga solo las propiedades
//especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en
//el nuevo objeto.


/**
 * @description Extraer las propiedades de un objeto usando un array.
 * @param {Object} obj - El objeto original que contiene las propiedades.
 * @param {Array<string>} propiedades - Un array de strings que contiene las propiedades a extraer.
 * @returns {Object} Un nuevo objeto que contiene solo las propiedades especificadas en el array.
 */
export function extraerPropiedades(obj, propiedades) {
  const resultado = {};
  propiedades.forEach(prop => {
      if (prop in obj) {
          resultado[prop] = obj[prop];
      }
  });
  return resultado;
}