// Template string y contatenacion(Mesclar unas valores con otros)

const producto = 'Monitor de 20 pulgadas';
const precio = 300;
const marca = 'HP';

// Concatenacion NORMAL
console.log('El producto es: ' + producto);

// Concatenacion con Template String
console.log(`El producto es: ${producto}`);


// Concatenacion normal
console.log(producto + ' tiene un precio de: ' + precio + ' y una marca ' + marca)

// Concatenacion con Template String
console.log(`${producto} tiene un precio de: ${precio} y una marca ${marca}`);