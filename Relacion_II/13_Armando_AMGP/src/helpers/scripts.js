/*
 * @author: Armando Marelius Garcia Paulsen
 * @description: Define una función llamada extraerPropiedades que tome un objeto obj y un array de
    propiedades. La función debe devolver un nuevo objeto que contenga solo las propiedades
    especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en
    el nuevo objeto.
 * @param {Object} miObjeto 
 * @param {String[]} arrayPropiedades 
 * @returns {Object}    Nuevo objeto con las propiedades que se piden
 */

    export const extraerPropiedades = (miObjeto, arrayPropiedades) => {
        const nuevoObjeto = {};                                           // quiero almacenar el nuevo objerto con las propiedades en nuevoObjeto

        //------Hago test para que mi página no caiga----------
        if(typeof miObjeto !== "object" || miObjeto === null){
          throw new Error("El primer parámetro no es un objeto");
        }

        if(!Array.isArray(arrayPropiedades) || arrayPropiedades === null || arrayPropiedades.length === 0){
          throw new Error("El segundo parámetro debe ser un array y no puede estar vacío");
        }

        for(const propiedad of arrayPropiedades){                           // Recorro array para ver si propiedad es string
          if(typeof propiedad !== "string"){
            throw new Error("El array debe estar compuesto solo por strings")
          }
        }

        //------Ejecución del programa-----------------
      
        for (const propiedad of arrayPropiedades) {                      // Recorremos el array propiedades , lo hago con for of para no siempre hacer foreach
          if (miObjeto[propiedad]  !== undefined) {                       // Si la propiedad existe en el objeto / está definida.
            nuevoObjeto[propiedad] = miObjeto[propiedad];             
          }
        }
        return nuevoObjeto;
      };
      