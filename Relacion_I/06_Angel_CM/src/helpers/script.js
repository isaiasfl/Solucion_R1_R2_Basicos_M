/**
 * @author: AngelCM
 * @description: Ordena un array de números de menor a mayor.
 * @param {Array} arr 
 * @returns {Array}
 */
export const ordenarNumeros = (arr) => {
    if(arr || typeof arr !== "int" || typeof arr !== "undefined") return arr.sort((a,b) => a - b);
    else return "Debes introducir un array";
}