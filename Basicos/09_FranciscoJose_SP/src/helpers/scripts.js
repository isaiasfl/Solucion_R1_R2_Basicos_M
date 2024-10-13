/**
 * @author: Francisco José Salmerón Puig
 * @description: Funcion que devuelve un array con cada clave-valor que tiene el objeto.
 * @param {object} object 
 * @returns {array}
 */
export const arrayPares = (object) => {
    if(typeof object == "object" && !Array.isArray(object)) {
        const array = []; //Creamos un array vacio.
    for (const [key, value] of Object.entries(object)) { //Hacemos un for of para recorrer las entradas clave valor del objeto
        array.push(`${key}-${value}`); //Metemos en el array cada clave-valor.
    }
    return array; //Devolvemos el array
    } else console.error("La variable pasada no es un objeto")   
}