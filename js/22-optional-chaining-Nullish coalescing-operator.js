
// Optional Chaining '?'
/*
El Optional Chaining es una característica de JavaScript que permite acceder 
a propiedades de objetos anidados de forma segura, incluso si una de las propiedades intermedias es null o undefined
*/

/*
El operador ?. se utiliza para acceder a la propiedad address y pets de user. 
Si user.address o user.pets es null o undefined, en lugar de lanzar un error, 
simplemente devolverá undefined. Esto es útil para evitar errores de tipo 
"cannot read property 'x' of undefined" cuando accedes a propiedades de objetos anidados.
*/

const user = {
    name: 'John',
    address: {
        street: 'Main St',
        city: 'New York'
    }
}

console.log(user.address?.street); // Imprimirá 'Main St'
console.log(user.pets?.apellido); // Imprimirá 'undefined'
console.log('Despues del usuario');




// Nullish Coalescing Operator '??'

/*
El operador de fusión nula (??) es una característica relativamente nueva en JavaScript, 
introducida para manejar los casos en los que deseas asignar un valor predeterminado 
solo si una variable es null o undefined, pero no si es 0, '', false u otros valores falsy. 
Aquí tienes una explicación detallada de cómo funciona con tu ejemplo:
*/

const pagina = null ?? 1;
console.log(pagina); // Imprimirá 1

/*
 En este caso, pagina tomará el valor de null solo si null es el valor asignado.
  Si null no está asignado, pagina tomará el valor de 1. Esto es útil cuando deseas 
  proporcionar un valor predeterminado específicamente para los valores nulos o indefinidos, 
  mientras ignoras otros valores falsy.

Por ejemplo, si pagina fuera 0:
 */

const pagina2 = 0 ?? 1;
console.log(pagina2); // Imprimirá 0

/*
Aquí, pagina toma el valor de 0 porque 0 no es nulo o indefinido. Si pagina fuera null, 
undefined u otro valor falsy, tomaría el valor 1.
*/