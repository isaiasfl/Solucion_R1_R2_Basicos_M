
/**
 * @description Obtiene la suma de las edades de las personas cuyo nombre empieza con una vocal
 * @param {array<Object>} personas 
 * @returns number
 */

export const obtenerSumaEdadesVocal = (personas) => {
  if(personas){
    return personas.filter(persona => /^[aeiouAEIOU]/.test(persona.nombre))
    .map(persona => persona.edad) 
    .reduce((suma, edad) => suma + edad, 0);
  }else{
    return "No me has pasado el array";
  }
    
  };