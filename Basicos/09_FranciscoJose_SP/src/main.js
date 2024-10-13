import { arrayPares } from "./helpers/scripts.js";

//------------Variables-----------
const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };
const array = [];
const objeto = {};

//------------Ejecucion de codigo---------------
console.log(arrayPares(coche)); /* [
    "marca-Toyota",
    "modelo-Corolla",
    "año-2020"
]
*/
console.log(arrayPares(array)); //La variable pasado no es un objeto

console.log(arrayPares("S")); //La variable pasada no es un objeto

console.log(arrayPares(3)); //La variable pasada no es un objeto

console.log(arrayPares(objeto)); //[]
