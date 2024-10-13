import {extraerPropiedades} from './src/helpers/scripts.js'




console.log(extraerPropiedades({ a: 1, b: 2, c: 3 }, ['a', 'c']));

console.log(extraerPropiedades({ nombre: 'Juan', edad: 30, pais: 'México' }, ['nombre', 'pais']));
// { nombre: 'Juan', pais: 'México' }

console.log(extraerPropiedades({ nombre: 'Ana', edad: 25 }, ['apellido']));
// {}

console.log(extraerPropiedades({ a: 1, b: 2, c: 3 }, ['a', 'b', 'c']));
// { a: 1, b: 2, c: 3 }

console.log(extraerPropiedades({}, ['a', 'b']));
// {}

console.log(extraerPropiedades({ nombre: 'Carlos', edad: 40 }, []));
// {}