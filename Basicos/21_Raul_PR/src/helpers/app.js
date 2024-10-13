/***
 * @description: Dado un array de objetos que representan tareas con una propiedad completada, usa some y every
para verificar si hay alguna tarea incompleta y si todas están completas. Métodos sugeridos: some,
every
 * @author: Raul Povedano Ruiz
 * @param: array
 * @returns: boolean
*/

export const hayTareaIncompleta = (array) =>  {
     if (Array.isArray(array) && array.length > 0) {
        return array.some((tarea) =>!tarea.completada);
    }else{
        return 'El array está vacío o Se debe pasar un array como parametro';
    }
};

