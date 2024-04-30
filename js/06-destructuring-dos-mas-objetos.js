// Objetos - destructuring de dos o mas objetos
let producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

let cliente = {
    nombre: 'Juan',
    premium: true,
    direccion: {
        calle: 'Calle Mexico'
    }
}

const { nombre, precio, disponible } = producto;

// Esta renombrando las propiedades - Luego hace la destructuracion del objeto interno
const { nombre: nombreCliente, premium, direccion: { calle } } = cliente;

console.log(nombre);
console.log(nombreCliente);