import { paresAlCuadrado } from "./helpers/scripts";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(paresAlCuadrado(numeros));

// const numeros2 = [1, 3, 5, 7, 9];
// console.log(paresAlCuadrado(numeros2));
// Resultado Esperado: []
// Comentario: No hay números pares, por lo tanto, el resultado es un arreglo vacío.

// const numeros3 = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
// console.log(paresAlCuadrado(numeros3));
// Resultado Esperado: [16, 4, 0, 4, 16]
// Comentario: Incluye números pares negativos y cero, elevándolos al cuadrado.

// const numeros4 = [];
// console.log(paresAlCuadrado(numeros4));
// Resultado Esperado: []
// Comentario: Arreglo vacío, espera un arreglo vacío como resultado.

// const numeros5 = [2, '4', 6, null, 8, undefined, 10];
// console.log(paresAlCuadrado(numeros5));
// Resultado Esperado: [4, 36, 64, 100]
// Comentario: Filtra solo los números pares válidos, ignorando otros tipos de datos.
