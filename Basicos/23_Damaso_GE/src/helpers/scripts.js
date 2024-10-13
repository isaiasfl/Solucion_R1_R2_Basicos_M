//Ejercicio 23:
/*Dado un objeto que contiene arrays como valores, usa Object.values y flat 
para obtener todos los elementos de esos arrays en un solo array. Métodos 
sugeridos: Object.values, flat*/
/**
 * @author: Francisco Dámaso Giménez Escudero
 * @description: Obtener todos los valores de los arrays de los que está formado un objeto
 * @param {Object}
 * @returns {Object}
 */
export const arrayObjetosValores = (obj) => Object.values(obj).flat();