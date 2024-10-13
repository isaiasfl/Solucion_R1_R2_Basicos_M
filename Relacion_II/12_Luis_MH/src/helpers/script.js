/**
 * @description:Ejercicio 12: Combinar Objetos
 * @param {Object}
 * @param {Object}
 * @returns {Object}
 */
export const combinarObjetos = (ob1, ob2) => Array.isArray(ob1) && Array.isArray(ob2) ? [...ob1, ...ob2] : { ...ob1, ...ob2 };
