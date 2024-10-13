/***
 * @description:Escribe una función llamada diferenciaArrays que encuentre la diferencia entre dos arrays,
es decir, los elementos que están en uno pero no en el otro. La función debe devolver un nuevo
array con los elementos diferentes.
 * @author: Raul Povedano Ruiz
 * @param: array1, array2
 * @returns: array
 */

export const diferenciaArrays = (array1, array2) => {

    if(Array.isArray(array1)&& Array.isArray(array2)&& array1.length>0 && array2.length>0){
        const diferencia1 = array1.filter(element => !array2.includes(element));
    const diferencia2 = array2.filter(element => !array1.includes(element));
    return [...diferencia1, ...diferencia2];
    }else{
        console.log("El array1 o el array2, o no son un Array o estan vacidos, compruebalo porfavor");
    }
    
 }

 