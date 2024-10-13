import { sumarMatrices } from './helpers/scripts.js';

console.log(sumarMatrices([[1,2,3], [4,5,6]], [["a","b", "c"], ["d","e", "f"]]));

// tests unitarios
console.log(sumarMatrices())
console.log(sumarMatrices([[1,2,3], [4,5,6]], [[1,2,3], [4,5,6]], [[1,2,3], [4,5,6]]))