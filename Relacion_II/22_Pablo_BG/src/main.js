import {sumarMatrices} from "./helpers/scripts.js";

// Primer array
let matriz1 = [[1, 2, 3], [4, 5, 6]];

// Segundo array
let matriz2 = [[7, 8, 9], [10, 11, 12]];

// Tercer array
let matriz3 = [[1,2], [3,4], [5,6]];

// Cuarto array
let matriz4 = [[], []];

// Quinto array
let matriz5 = [["estos", "no", "son"],["ninguna", "clase de", "numeros"]];

// Sexto array
let matriz6 = ["no", "matriz"];



let result = sumarMatrices(matriz1, matriz2); //no salta error

// let result2 = sumarMatrices(matriz1, matriz3); //salta error, no son de las mismas dimensiones
// let result3 = sumarMatrices(matriz1, matriz4); //salta error, segundo array vacío
// let result4 = sumarMatrices(matriz1, matriz5); //salta error, el segundo array no tiene números
// let result5 = sumarMatrices(matriz1, matriz6); //salta error, no es un array bidimensional



//dejo solo sin comentario la que no da error
console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);