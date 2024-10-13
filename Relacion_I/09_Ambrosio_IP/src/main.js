import { buscarElemento } from "./helpers/scripts";


// Ejemplo 1

const arr = ["hola","adios","javascript"];

console.log(buscarElemento(arr, "adios"));   // Esto devulve 1

// Ejemplo 2

const arr2 = ["hola","adios","javascript"];

console.log(buscarElemento(arr2, "adios2"));   // Esto devuelve -1, porque no hay elemento "adios2" en el array

// Ejemplo 3

const arr3 = ["hola","adios","javascript"];

console.log(buscarElemento(arr3, "javascript"));   // Esto devuelve 2

// Ejemplo 4

const arr4 = ["hola","adios","javascript"];

console.log(buscarElemento(arr4, "Hola"));   // Esto devuelve -1, porque la búsqueda es case sensitive


console.log(buscarElemento()); // No se ha pasado elementos

console.log(buscarElemento("manuel"));// No se ha pasado el elemento a buscar

console.log(buscarElemento(arr3));  // No se ha pasado el elemento a buscar

