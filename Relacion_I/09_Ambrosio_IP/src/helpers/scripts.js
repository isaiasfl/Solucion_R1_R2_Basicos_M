
/**
 * @description función que toma un array arr y un elemento del array. Devuelve el índice de la primera 
 * aparición de elemento en el array, o -1 si no se encuentra.
 * @param {array} arr 
 * @param {elemento} elemento 
 * @returns number
 */

export const buscarElemento = (arr, elemento) => {
    if (!arr && !elemento) {
        return 'No se han pasado parámetros';
    }
    
    if (arr === 'undefined') {
        return 'No se ha pasado el array';
    }

    if (typeof elemento === 'undefined') {
        return 'No se ha pasado el elemento a buscar';
    }

    const index = arr.indexOf(elemento);

    return index >= 0 ? index : -1;
}
