
const libro = { titulo: "1984", autor: "George Orwell", paginas: 328 };

console.log(libro);

delete libro.paginas;

console.log(libro);

delete libro.editor; // Editor no existe
console.log(libro); // No hace nada y tampoco muestra error


libro = { titulo: "Reasignado" };
console.log(libro);  // Da error por asignación a una variable siendo esta una constante
