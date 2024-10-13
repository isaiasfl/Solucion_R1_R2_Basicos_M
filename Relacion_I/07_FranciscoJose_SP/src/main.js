import { eliminarElemento } from "./helpers/scripts.js";

//------------Variables-----------
const object = {clave: 5};

//------------Ejecicion de codigo---------------
console.log(eliminarElemento([1,6,3,4,5,6,7,8,9],6)); //[1,3,4,5,6,7,8,9]

console.log(eliminarElemento("string")); //No se han pasado los parametros correctos

console.log(eliminarElemento());  //No se han pasado los parametros correctos

console.log(eliminarElemento(object, 5)); //No se han pasado los parametros correctos

console.log(eliminarElemento(object, 5)); //No se han pasado los parametros correctos