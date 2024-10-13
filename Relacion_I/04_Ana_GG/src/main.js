import { unirArrays } from "./helpers/scripts";

// ------- Ejecución del código ---------------

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(unirArrays(array1, array2)); // Resultado esperado: [1, 2, 3, 4, 5, 6]

// -------- TEST DE ERRORES ----------

// ? Si se pasa un parámetro que no es un array, lo incluirá como un elemento dentro del array final.

// const result = unirArrays([1, 2], 3, [4, 5]);
// console.log(result); // Resultado: [1, 2, 3, 4, 5]


// ? Si se pasa un objeto que no es un array, lo añade como un único elemento en el array final.

// const result = unirArrays([1, 2], { a: 3, b: 4 }, [5, 6]);
// console.log(result); // Resultado: [1, 2, { a: 3, b: 4 }, 5, 6]

// ? Si no se pasa ningún parámetro, se devuelve un array vacío.

// const result = unirArrays();
// console.log(result); // Resultado: []

// ? Si se pasa un array que contiene otros arrays, no aplana los arrays anidados más allá del primer nivel.

// const nestedArray = [[1, 2], [3, [4, 5]], 6];
// const result = unirArrays(nestedArray, [7, 8]);
// console.log(result); // Resultado: [[1, 2], [3, [4, 5]], 6, 7, 8]

