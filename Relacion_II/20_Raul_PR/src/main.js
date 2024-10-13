import { diferenciaArrays } from "./helpers/app";

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

console.log( diferenciaArrays(array1, array2)) //[ 1, 2, 5, 6 ]

//Con array vacio, o algo que no sea un array da el siguiente  resultado
console.log( diferenciaArrays()) //'El array1 o el array2, o no son un Array o estan vacidos, compruebalo porfavor'