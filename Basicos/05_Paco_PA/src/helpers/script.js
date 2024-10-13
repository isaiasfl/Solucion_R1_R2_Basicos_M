//RELACION DE BASICOS

          //5

            /**
             * @description Encuentra un numero divicible entre 3 y su indice
             * @param {Array} numeros 
             * @returns {Array}
             */

          export const numeroDivisibleTres = (numeros) => {
            const divisible = numeros.find((numero) => numero % 3 === 0);
          
            const indice = numeros.findIndex((numero) => numero % 3 === 0);
          
            return { divisible, indice }; 
          };
