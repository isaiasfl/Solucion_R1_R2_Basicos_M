import { sumaArrays } from "./helpers/scripts"

const arr1 = [1,2,3]
const arr2 = [4,5,6]

console.log(sumaArrays(arr1, arr2));
//console.log(sumaArrays(arr1)) //Falla: no se puede leer las propiedades de arr2 como undefined
console.log(sumaArrays(arr1,arr2,[3,4,5]))
//console.log(sumaArrays()); //Falla: no se puede leer las propiedades de arr1 como undefined
//console.log(sumaArrays("texto1","texto2")); //Falla: se está aplicando un método de array a un string