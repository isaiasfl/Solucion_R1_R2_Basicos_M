import { arrayObjetosValores } from "./helpers/scripts"

const obj = {
    a: [1, 2, 3],
    b: [4, 5],
    c: [6, 7, 8, 9]
  };

console.log(arrayObjetosValores(obj));
console.log(arrayObjetosValores(obj,{a:1,b:2}));
console.log(arrayObjetosValores([1,2]));
console.log(arrayObjetosValores("texto"));
//console.log(arrayObjetosValores()); //No se puede acceder a los valores de objeto de un null