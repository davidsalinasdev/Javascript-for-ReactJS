// Manipulación de objetos

let producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

// Objeto de no se pueda eliminar las propiedades
// Object.freeze(producto);

// Permite modificar las propiedades, pero no te permite añadir o eliminar
// Object.seal(producto);

// Reescribiendo un valor
producto.disponible = false;

// Agregando propiedades(Si no existe una propiedad lo va a añadir)
producto.imagen = 'imagen.jpg';

// Para eliminar una propiedad
delete producto.disponible;



console.log(producto);