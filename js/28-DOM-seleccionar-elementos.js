// Selectores de elementos
const heading = document.querySelector('.heading');

console.log(heading);
console.log(heading.tagName); // Imprimir el nombre de la etiqueta
console.log(heading.textContent); // Imprimir el contenido de la etiqueta
console.log(heading.classList); // Imprimir la lista de clases que contiene la etiqueta
console.log(heading.id); // Imprimir el id de la etiqueta


const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces); // Imprimir todos los enlaces (NodeList)
