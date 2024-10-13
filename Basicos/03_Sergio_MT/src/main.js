const numeros = [1, 50, 75, 99];

const mayor = (numero) => numero > 100;
console.log(numeros.some(mayor));

const positivo = (numero) => numero > 0;
console.log(numeros.every(positivo));