import { multiplicarRaizPorEscalar } from "./helpers/scripts";

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const escalar = 2;

const resultado = multiplicarRaizPorEscalar(matriz, escalar);

console.log(resultado);