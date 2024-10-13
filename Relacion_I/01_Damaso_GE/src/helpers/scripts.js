//Ejercicio 1: Suma de Arrays
/*Escribe una función llamada `sumaArrays` que tome dos arrays `arr1` y `arr2` 
del mismo tamaño. La función debe devolver un nuevo array que contenga la suma 
de los elementos correspondientes de `arr1` y `arr2`.*/

/**
 * @author: Francisco Dámaso Giménez Escudero
 * @description: Suma dos arrays
 * @param {Array, Array}
 * @returns {Array}
 */
export const sumaArrays = (arr1,arr2) => arr1.map((num, index) => num + arr2[index]);