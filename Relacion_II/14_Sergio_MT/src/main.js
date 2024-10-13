const inicio = 28;
const fin = 39;

const rangoNumeros = (start, end) => Array.from({ length: end - start + 1 }, (v, i) => start + i);
console.log(rangoNumeros(inicio, fin));