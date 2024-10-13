// //Ejercicio 22: Suma de Matrices
// Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales)
// y devuelva el resultado. Las matrices de entrada estarán representadas como arrays de arrays
// con la misma cantidad de filas y columnas.

/**
 * @description funcion que recoge dos arrays bidimensionales y los suma
 * @param {Array} Matriz 1
 * @param {Array} Matriz 2
 * @returns {Array} Matriz resultado
 */
export const sumarMatrices = (matriz1, matriz2)=> {
    if(matriz1.length!== matriz2.length || matriz1[0].length!== matriz2[0].length) {
        throw new Error("Las matrices deben tener la misma forma");
    }
    if (!Array.isArray(matriz1) || !Array.isArray(matriz2)) {
        throw new Error("Ambos argumentos deben ser matrices (arrays)");
    }

    let result = [];
    for(let i = 0; i < matriz1.length; i++) {
        if (!Array.isArray(matriz1[i]) || !Array.isArray(matriz2[i])) {
            throw new Error("Cada fila de las matrices debe ser un array");
        }
        result[i] = [];
        for(let j = 0; j < matriz1[0].length; j++) {
            if (typeof matriz1[i][j] !== 'number' || typeof matriz2[i][j] !== 'number') {
                throw new Error("Todos los elementos de las matrices deben ser números");
            }
            result[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    return result;
}