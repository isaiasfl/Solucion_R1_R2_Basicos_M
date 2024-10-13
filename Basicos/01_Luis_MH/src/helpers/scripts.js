/**
 @description:Ejercicio1: Dado un array de números, utiliza los métodos filter y map para obtener los números pares y elevarlos al cuadrado.
@param {Array}
@returns {Array}
 */

export const paresAlCuadrado = (arr) => arr.filter(num => num%2==0).map((num) => num*num);