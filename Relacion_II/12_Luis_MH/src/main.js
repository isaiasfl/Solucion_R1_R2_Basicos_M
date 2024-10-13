import { combinarObjetos } from "./helpers/script";

const ob1 = [1,2,3,4];
const ob2 = [1,2,3,4];   
console.log(combinarObjetos(ob1,ob2));

// const ob7 = [];
// const ob8 = [5, 6, 7];
// console.log(combinarObjetos(ob7, ob8)); 
//Resultado Esperado: [5, 6, 7]

// console.log(combinarObjetos(ob8, ob7)); 
//Resultado Esperado: [5, 6, 7]

// console.log(combinarObjetos([], [])); 
//Resultado Esperado: []

// const ob9 = [1, "dos", { tres: 3 }];
// const ob10 = [4, "cinco", { seis: 6 }];
// console.log(combinarObjetos(ob9, ob10)); 
//Resultado Esperado: [1, "dos", { tres: 3 }, 4, "cinco", { seis: 6 }]

// const ob15 = [{ a: 1 }, { b: 2 }];
// const ob16 = [{ c: 3 }, { d: 4 }];
// console.log(combinarObjetos(ob15, ob16)); 
//Resultado Esperado: [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }]