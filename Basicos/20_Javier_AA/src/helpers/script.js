/**
 * @author: javiilpf
 * @description: Función que ordena las fechas de más reciente a más antiguo
 * @param {Array<object>} arr
 * @returns {Array<object>}
 */
export const ordenarPropiedades = (arr) => arr.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
