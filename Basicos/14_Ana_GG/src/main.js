import { keyUppercase } from "./helpers/scripts";


const pedido = { producto: "Silla", cantidad: 4, precio: 50 };

// ------- Ejecución del código ---------------
console.log(keyUppercase(pedido)); // Resultado: { PRODUCTO: "Silla", CANTIDAD: 4, PRECIO: 50 }


// -------- TEST DE ERRORES ----------

// ? Si el objeto original contiene claves que, al convertirse a mayúsculas, se duplican,
// ? la función sobrescribirá el valor de la clave anterior.

//const orders = {
//  apple: 5,
//  APPLE: 10
//};
//console.log(keyUppercase(orders)); // Resultado: { APPLE: 10 }


// ? Si se pasa un array, Object.keys tratará las posiciones del array como claves de string ("0", "1", etc.).
//const orders = ["apple", "banana"];
//console.log(keyUppercase(orders)); // Resultado: { '0': 'apple', '1': 'banana' }


// ? Si se pasa un objeto vacío ({}), la función simplemente devolverá otro objeto vacío, ya que no hay claves para procesar.
// const orders = {};
// console.log(keyUppercase(orders)); Resultado: {}


// ? Si se pasa un array que contiene un objeto como elemento, tratará el array como un objeto en el que 
// ? cada índice del array es una clave de tipo string ("0", "1", etc.). 
// const orders = [{ apple: 5, banana: 10 }];
// console.log(keyUppercase(orders)); Resultado: { '0': { apple: 5, banana: 10 } }
