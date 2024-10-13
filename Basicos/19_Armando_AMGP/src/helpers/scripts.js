// Ejercicio 19
/**
 * @author: Armando Marelius Garcia Paulsen
 * @description: Dado un array de strings, usa reduce y split para contar cuántas veces aparece una letra específica en
todos los strings. Métodos sugeridos: reduce, split
* @param {string[]} palabras        //array de palabras
* @param {string}   letra           //letra a buscar 
* @returns {number}     Numero de veces que aparece la letra
 */

// Voy a asumir que la persona que introduce los datos introduce directamente un array de stings. Si introdujera texto
// lo que haria sería sobre el string hacer miString.split(" ")  , y así obtendría mi array de strings.

export const contarLetra = (arrayPalabras, letraABuscar) => {

  //  ---------Test para evitar que mi aplicación caiga ----------
    if(!Array.isArray(arrayPalabras)){
      throw new Error("El primer parámetro no es un array");
    }

    for (const palabra of arrayPalabras){
      if(typeof palabra !== "string"){
        throw new Error("El array debe estar formado únicamente por strings");
      }
    }

    if(typeof letraABuscar !== "string" || letraABuscar.length !== 1){
      throw new Error("El segundo parámetro debe ser una única letra de tipo string");
    }

  // ---------- Ejecución de programa ------------------
    const ocurrenciasLetra = arrayPalabras.reduce((acc, palabra) => {
      const partes = palabra.toLowerCase().split(letraABuscar.toLowerCase());                 // Divido en partes mi array de palabras.
      return acc + (partes.length - 1);                           // Prtes.length -1 es la cantidad de veces que aparecerá la letra en esa iteracion
    }, 0);
  
    return ocurrenciasLetra;
  };