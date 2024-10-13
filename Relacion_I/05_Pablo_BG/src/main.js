import {minDiv3} from "./helpers/scripts.js";


// Enunciado
const numeros = [4, 5, 9, 12, 7];
const numberos = [1, 2, 4, 5,];
const nu = [];
const no = ["not", "a", "number"];


console.log(minDiv3(numeros));      //da 9
console.log(minDiv3(numberos));     //da error: no hay números divisibles entre tres
console.log(minDiv3(nu));           //da error: no hay nada, por tanto no hay números divisibles entre tres
console.log(minDiv3(no));           //da error: no hay números, por tanto no hay números divisibles entre tres