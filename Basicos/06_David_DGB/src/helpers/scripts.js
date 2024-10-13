/**
 * @author: David Gómez Bravo
 * @version 1.0
 * @description: Función que suma los numeros un array
 * @returns {Number}
 */

export const sumaNumeros = (array) => {
    if(Array.isArray(array)){
        if(array.every(number => typeof number === 'number' )){
            let suma = 0;
            array.forEach((num) => suma += num);
            return suma;
        }else{return "El contenido del array debe de ser solo numeros."};
    }else{ return "El parametro introducido no es un array."; }
};