/**
 * @description: Dado un objeto de configuración, usa Object.assign 
 * para crear una copia del objeto con una
 * propiedad adicional.
 * @param {Object} objeto 
 * @param {Object} adicional 
 * @returns 
 */

export const copiaObjeto = (objeto, propiedad)=>{
    return typeof objeto === 'object' && typeof propiedad === 'object' ? Object.assign(objeto, propiedad) : "Los parametros no son correctos";
}