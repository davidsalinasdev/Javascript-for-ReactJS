// Objetos y destructuring

const persona = {
    nombre: 'Juan',
    edad: 30,
    clave: 'papu',
    disponible: true
}

// console.log(persona);
// console.log(typeof persona);
// console.table(persona);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.autenticado);

// Destructuracion de objetos
const { nombre, edad, clave, disponible } = persona;

console.log(nombre, edad, clave, disponible);

// Object Literal Enhacement
const autenticado = true;
const usuario = "Juan";
const nuevoObjeto = {
    autenticado,
    usuario
}
console.log(nuevoObjeto);