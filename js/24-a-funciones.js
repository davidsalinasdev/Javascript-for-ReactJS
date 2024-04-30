

// Exportaciones de funciones nombradas

// Arrow function
export const sumar = (n1, n2) => n1 + n2;

// Normal
export function restar(n1, n2) {
    return n1 - n2;
}

export function division(n1, n2) {
    return n1 / n2;
}

// export {
//     sumar,
//     restar,
//     division 
// }

// Exportaciones por defecto(Default exports)
/*
Tiene dos caracteristica:
1.- La primera es que solo puede haber un export defauld por archivo
2.- Es que la puedes importar y nombrar como uno quiera
*/
export default function multiplicar(n1, n2) {
    return n1 * n2;
}

// const saludo = () => {
//     return 'Hola mundo'
// }
// export default saludo;