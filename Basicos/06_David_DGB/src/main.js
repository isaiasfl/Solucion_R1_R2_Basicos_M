import { sumaNumeros } from "./helpers/scripts";

const numeros = [2, 4, 6, 8];
const palabras = ["Hola", "Paco", "Sandía"];
const mix = [1,2,3,"hola"];

console.log(sumaNumeros(numeros));

//tests unitarios

console.log(sumaNumeros());

console.log(sumaNumeros(palabras));

console.log(sumaNumeros(mix))