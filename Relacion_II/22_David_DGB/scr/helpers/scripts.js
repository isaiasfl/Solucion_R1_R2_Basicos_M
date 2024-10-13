/**
 * @author: David Gómez Bravo
 * @version 1.0
 * @description: Función que suma arrays bidimensionales 
 * @param {Array} matriz1 
 * @param {Array} matriz2 
 * @returns {Array} 
 */

export const sumarMatrices = (matriz1, matriz2) => {
    if(Array.isArray(matriz1) && Array.isArray(matriz2)){
        if (matriz1.length === matriz2.length) {
            const resultado = new Array(); 
            for (let i = 0; i < matriz1.length; i++) {
                const fila = new Array();
                for (let j = 0; j < matriz1[0].length; j++) {
                    fila.push(matriz1[i][j] + matriz2[i][j]);
                }
                resultado.push(fila);
            } return resultado;
        }else{ return "Los arrays deben de tener el mismo tamaño."; }
    }else {return "Los parametros introducidos deben de ser arrays."; }
};