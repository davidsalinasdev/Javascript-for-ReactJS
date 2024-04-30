// Destructuring of arrays

const tecnologias = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Angular'];

// Acceder a un valor de un arreglo y imprimirlo(FORMA TRADICIONAL)
const react = tecnologias[1];
console.log(react);

// desestructurando un arreglo
const [java, reactjs] = tecnologias;

// Imprimir desestructurando de acuerdo a la posicion del arreglo sin importa el nombre del valor del arreglo
console.log(java, reactjs);


// Otro ejemplo
// Como hacer para extraer un valor definido sin necesidad de generar mas variables que se va a requerir
const tecnologias2 = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Angular'];

const [, , node, , , angular] = tecnologias2
console.log(node); // Imprimer 'Node.js'
console.log(angular); // Imprimer 'Angular'



