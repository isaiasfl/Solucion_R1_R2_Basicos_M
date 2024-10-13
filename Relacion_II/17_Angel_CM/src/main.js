import {multiplicarMatrizPorEscalar} from './helpers/script.js';

document.addEventListener('DOMContentLoaded', () => {

  let escalar = 3;
  const matriz = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
  ];
  console.log(multiplicarMatrizPorEscalar(matriz, escalar));
  console.log(multiplicarMatrizPorEscalar(matriz));
  console.log(multiplicarMatrizPorEscalar());
  console.log(multiplicarMatrizPorEscalar('matriz'));
  console.log(multiplicarMatrizPorEscalar(1));

});
