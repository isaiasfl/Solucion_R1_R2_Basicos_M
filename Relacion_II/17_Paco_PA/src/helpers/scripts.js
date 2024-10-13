
        /**
         * @description : Multiplica una matriz por un escalar.
         * @param {Array} matriz 
         * @param {Number} escalar 
         * @returns {Array}
         */

        export const multiplicarRaizPorEscalar =(matriz, escalar) => {
            const result = [];
            let i = 0;
            while (i < matriz.length) {
                const resultado= [];
                let j = 0;
            while (j < matriz[i].length) {
                resultado.push(matriz[i][j] * escalar);
                j++;
            }
            result.push(resultado);
            i++;
            }
            return result;
  
          };
  
  