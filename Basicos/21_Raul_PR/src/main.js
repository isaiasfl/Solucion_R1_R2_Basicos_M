import { hayTareaIncompleta } from "./helpers/app";

const tareas = [
    { tarea: "Lavar los platos", completada: true },
    { tarea: "Sacar la basura", completada: false },
    { tarea: "Comprar comida", completada: true },
   ];

console.log(hayTareaIncompleta(tareas)); //true

console.log(hayTareaIncompleta()) //sin parametro o array vacio o cualquier cosa que no sea Array devolvera "El array está vacío o Se debe pasar un array como parametro"
