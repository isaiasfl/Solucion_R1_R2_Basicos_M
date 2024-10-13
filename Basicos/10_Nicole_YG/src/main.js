import { copiaObjeto } from "./helpers/script.js";


const configuracion = { tema: "oscuro", idioma: "español" };

//imprime: {tema: 'oscuro', idioma: 'español', caracter: 'a'}
console.log(copiaObjeto(configuracion,{caracter:'a'}))
//imprime:"Los parametros no son correctos"
console.log(copiaObjeto(configuracion, "caracter"))
//imprime: los parametros no son correctos
console.log(copiaObjeto(configuracion, 1))
//imprime: los parametros no son correctos
console.log(copiaObjeto("configuracion", 'caracter'))
//imprime: los parametros no son correctos
console.log(copiaObjeto())

