import { obtenerSumaEdadesVocal } from "./helpers/scripts";

// Ejemplo 1

const personas = [
  { nombre: "Oscar", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 28 },
  { nombre: "Elena", edad: 23 },
];

console.log(obtenerSumaEdadesVocal(personas)); // Esto devulve 78

// Ejemplo 2

const personas2 = [
  { nombre: "Maria", edad: 28 },
  { nombre: "Juan", edad: 32 },
  { nombre: "Pepe", edad: 25 },
  { nombre: "Luis", edad: 28 },
];
console.log(obtenerSumaEdadesVocal(personas2)); // Esto devulve 0

// Ejemplo 3

const personas3 = [
  { nombre: "3aria", edad: 28 },
  { nombre: "Juan", edad: 32 },
  { nombre: "2epe", edad: 25 },
  { nombre: "Luis", edad: 28 },
];
console.log(obtenerSumaEdadesVocal(personas3)); // Esto devulve 0

console.log(obtenerSumaEdadesVocal()); // Esto devuelve "No me has pasado el array"
