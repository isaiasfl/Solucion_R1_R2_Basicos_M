import {extraerPropiedades } from './src/helpers/scripts.js';


console.log(extraerPropiedades({nombre: "ARMANDO", edad: 21, ciudad: "Granada", pais: "España"},["nombre" , "edad", ] ));    
// {nombre:"Armando", edad:21}