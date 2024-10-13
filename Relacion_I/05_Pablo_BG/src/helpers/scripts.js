// Ejercicio 5:
// Usa el método find para obtener el primer número divisible por 3 de un array, y findIndex para
// obtener su índice.


/**
 * @description Encuentra el primer número divisible entre tres del array dado
 * @param {Array} numeros
 * @returns {number} numero resultado
 */
export const minDiv3 = (numeros) =>{
    if (!Array.isArray(numeros)) {
        throw new TypeError("El parámetro debe ser un array");
    }

    for (const num of numeros) {
        if (typeof num !== 'number') {
            throw new TypeError("Todos los elementos del array deben ser números");
        }
    }


    if(numeros.find((num) => num % 3 === 0)){
        return numeros.find((num) => num % 3 === 0);
    }else{
        return "No hay números divisibles entre tres";
    }
}