/**
 * @author: Francisco José Salmerón Puig
 * @description: Funcion que elimina del array la primera posicion que coincide con el elemento mencionado.
 * @param {array} array 
 * @param {all} elemento 
 * @returns {array}
 */

export const eliminarElemento = (array, elemento) => {
    if(Array.isArray(array) && !isNaN(elemento)){ //Comprueba que es un array y que el parametro pasado es un numero
        let posicion = array.findIndex(array => array === elemento); //Devuelve la posicion del array donde coincide el elemento buscado.
    array.splice(posicion,1); //Elimina el elemento.
    return array; //Devuelve el array sin el elemento.
    } else console.error("No se han pasado los parametros correctos")
    
}