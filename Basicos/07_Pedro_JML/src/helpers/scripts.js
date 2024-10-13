/**
 * Obtiene los primeros 3 números de un array utilizando slice y 
 * elimina los últimos 2 elementos del array original utilizando splice.
 *
 * @param {number[]} numeros - El array de números.
 * @returns {Object} Un objeto que contiene dos propiedades:
 *  - `primerosTres`: Un array con los primeros 3 números (si hay al menos 3).
 *  - `numerosModificado`: El array original después de eliminar los dos últimos elementos.
 */
export function manipularArray(numeros) {
    // Validar que el input es un array
    if (!Array.isArray(numeros)) {
        throw new Error("El argumento debe ser un array");
    }

    // Validar que todos los elementos del array son números
    if (!numeros.every(num => typeof num === 'number')) {
        throw new Error("El array debe contener solo números");
    }

    // Usar slice para obtener los primeros 3 números (o menos si no hay suficientes)
    const primerosTres = numeros.slice(0, 3);
  
    // Usar splice para eliminar los dos últimos elementos si el array tiene más de 2 elementos
    if (numeros.length >= 2) {
        numeros.splice(-2);
    } else {
        numeros.splice(0); // Eliminar todos si tiene menos de 2
    }
  
    // Retornar los resultados en un objeto
    return {
        primerosTres,
        numerosModificado: numeros
    };
}
