// Modulos de ECMAScript Modules(Te permite reutilizar y separar código)
// Importando modulos
// Importando modulos nombradas y default
import multiplicar, { sumar as funcionSumar, restar } from './24-a-funciones.js';

// Nombradas
const resultadoSumar = funcionSumar(10, 20);
console.log(resultadoSumar);

const resultadoRestar = restar(10, 20);
console.log(resultadoRestar);

// deafult
const resultadoProducto = multiplicar(10, 20);
console.log(resultadoProducto);


