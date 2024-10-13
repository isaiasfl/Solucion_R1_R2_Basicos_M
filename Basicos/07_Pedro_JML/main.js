import { manipularArray } from "./src/helpers/scripts.js";

const numeros = [10, 20, 30, 40, 50, 60];
const resultado = manipularArray(numeros);
console.log("Primeros 3 números:", resultado.primerosTres);
console.log("Array después de eliminar los dos últimos elementos:", resultado.numerosModificado);

const resultado1 = manipularArray([10, 20, 30, 40, 50]);
console.log(resultado1);
// Salida esperada:
// {
//   primerosTres: [10, 20, 30],
//   numerosModificado: [10, 20, 30]
// }

const resultado2 = manipularArray([1, 2, 3]);
console.log(resultado2);
// Salida esperada:
// {
//   primerosTres: [1, 2, 3],
//   numerosModificado: [1]
// }

const resultado3 = manipularArray([7, 8]);
console.log(resultado3);
// Salida esperada:
// {
//   primerosTres: [7, 8],
//   numerosModificado: []
// }

const resultado4 = manipularArray([5]);
console.log(resultado4);
// Salida esperada:
// {
//   primerosTres: [5],
//   numerosModificado: []
// }

const resultado5 = manipularArray([]);
console.log(resultado5);
// Salida esperada:
// {
//   primerosTres: [],
//   numerosModificado: []
// }