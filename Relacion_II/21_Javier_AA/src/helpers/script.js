/**
 * @description: Función que devuelve un array rotando las posiciones con un número.
 * @params {Array<number>, num} arr, num
 * @returns {Array<number>}
 */
export const rotarArray=(arr, num)=>{
    // Rotar a la derecha
    if (num > 0) {
        return arr.slice(-num).concat(arr.slice(0, -num));
    }
    // Rotar a la izquierda
    else {
        return arr.slice(-num).concat(arr.slice(0, -num));
    }    
};