
const dividirFragmento = (arr, tamaño) =>

 arr.reduce((acc, actual, indice) =>{
  if (indice % tamaño === 0) {
    acc.push([]);
  }

  acc[acc.length - 1].push(actual);
    
  return acc;
 }, []);

const arr= [5,8,9,3,5,7,1,6];

const tamaño=3;

console.log(dividirFragmento(arr, tamaño));


tamaño = "Hola"; // Tamaño no valido porque debe ser un digito

tamaño = -3; // Número negativo

arr= "Array"; // lanzara error porque debe ser un array

