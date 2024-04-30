// FUNCTION DECLARATION

/**Las funciones es lo que te va a permitir escribir código reutilizable en JavaScript y en cualquier lenguaje de programación.

Algo importante es que cuando tú vas a crear un proyecto, en lugar de escribir todo el código junto,
vas a separarlo en pequeñas funciones.

Cada función tiene que tener un propósito y tiene que servir para algo.

Existen varios términos para funciones en JavaScript.
 */

// 1.- Declaración de una función
function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}

// Llamando a la función
sumar(100, 131); // Imprime 231
sumar(1, 10); // Imprime 11

// 2.- Parametros por defecto
function sumar2(numero1 = 3, numero2 = 5) {
    console.log(numero1 + numero2);
}

// Llamando a la función
sumar2(100); // Imprime 105
sumar2(undefined, 10); // Imprime 13
