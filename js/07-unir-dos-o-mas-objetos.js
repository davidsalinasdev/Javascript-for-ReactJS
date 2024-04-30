// Como unir dos o mas Objetos
let producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

let cliente = {
    nombre: 'Juan',
    premium: true
}

// Agregando productos al objeto cliente
const carrito = {
    cantidad: 1,
    ...producto // ... = Spread Operator - Unir dos o mas objetos
};

// Como tener un objeto o varios dentro de otro objeto
const nuevoObjeto = {
    producto: { ...producto },
    cliente: { ...cliente }
}
console.log(nuevoObjeto);
// =
const nuevoObjeto2 = {
    producto,
    cliente,
}
console.log(nuevoObjeto2);


// Sobreescribe las propiedades con key(indice) iguales
const nuevoObjeto3 = {
    ...producto,
    ...cliente
}
console.log(nuevoObjeto3);

// Tambien sobreescribe las propiedades con key(indice) iguales
const nuevoObjeto4 = Object.assign(producto, cliente);
console.log(nuevoObjeto4);

