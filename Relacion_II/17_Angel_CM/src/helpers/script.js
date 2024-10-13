
/**
 * @author: AngelCM
 * @description: Multiplica una matriz por un escalar.
 * @param {Object} matriz 
 * @param {Int} escalar
 * @returns {object} 
 */
export const multiplicarMatrizPorEscalar = (matriz, escalar) => {
    if(typeof matriz === 'object'){
        if(typeof escalar === 'number') return matriz.map(fila => fila.map(elemento => elemento * escalar));
        else return "Valor no valido: " + typeof escalar + ". Debes introducir un escalar";
    }else return "Valor no valido: " + typeof matriz + ". Debe ser una matriz";
    
}