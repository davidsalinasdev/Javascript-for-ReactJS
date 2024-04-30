// Manipular elementos HTML en el DOM  con JS

const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');


// Modificando el contenido de una etiqueta HTML

heading.textContent = 'Un nuevo heading'; // Modificar el contenido de la etiqueta
heading.id = 'Un nuevo ID'; // Modificar el ID de la etiqueta

heading.removeAttribute('id'); // Eliminar el atributo ID de la etiqueta
console.log(heading.textContent);


//  Selecionando un input
const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Un nuevo valor'; // Modificar el valor del input
inputNombre.dataset.nombre = 'Juan'; // Crear una nueva propiedad de la etiqueta data


// Manipulacion de coleccion de datos NodeList
console.log(enlaces);
enlaces[0].textContent = 'Nuevo enlace'; // Modificar el contenido el pososopn [0] los enlaces

enlaces.forEach((enlace) => enlace.textContent = 'Nuevo enlace'); // Modificar el contenido de todos los enlaces
