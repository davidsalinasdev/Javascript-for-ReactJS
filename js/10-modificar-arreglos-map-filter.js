// Operaciones con arreglos

const tecnologias = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Angular'];

// Modificando un valor de un arreglo si y solo si existe el indice de ese valor
tecnologias[2] = 'Express.js';

// Agregando un valor si el indice no existe en un arreglo(Ejemplo: Indice 6 no existe en el arreglo)
tecnologias[6] = 'Express.js';

console.table(tecnologias);


// Metodos para arreglos (Manipulación de arreglos, tiene muchos metodos para arreglos)

// metodo para agregar un valor a final de un arreglo(MUTA)
tecnologias.push('Nest.js');
console.log(tecnologias);

// CONSEJO(NO USAR PUSH) metodo para agregar un valor a principio de un arreglo EN REACTJS

/* Entonces, en resumen, el código crea un nuevo arreglo llamado nuevoArreglo que contiene 
 todos los elementos del arreglo tecnologias y añade el string 'Vue.js' al final del mismo.(NO MUTA)
 */
//  Agregando un valor a final de un arreglo
const nuevoArregloFinal = [...tecnologias, 'Vue.js'];
console.table(nuevoArregloFinal);

// Agregando un valor a principio de un arreglo
const nuevoArregloInicio = ['Vue.js', ...tecnologias];
console.table(nuevoArregloInicio);

// Eliminando el primer valor de un arreglo con (Shift) esto hace que(MUTE EL ARREGLO ARREGLO ORIGINAL)
tecnologias.shift();
console.log(tecnologias);


const tecnologias2 = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Angular'];

// Donde tech es cada uno de los elementos del arreglo(La funcion de flecha itera cada uno de los elementos del arreglo)
// El metodo (filter) crea un nuevo arreglo que contiene solo los elementos que cumplan la condición(NO MUTA)
const tecnologias3 = tecnologias2.filter((tech) => {
    // Se puede agregar condiciones
    if (tech === 'Node.js') {
        return tech;
    }
});
// Entonces tecnologias3(array) contiene solo el elemento 'Node.js'
console.log(tecnologias3);


// Otro ejemplo 
const tecnologias4 = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Angular'];
const tecnologias5 = tecnologias2.filter((tech) => {
    // Se puede agregar condiciones
    if (tech !== 'Node.js') {
        return tech;
    }
});
// Entonces tecnologias5(array) contiene solo los elementos 'JavaScript', 'React.js', 'HTML', 'CSS', 'Angular'
console.log(tecnologias5);


// Ahora como se puede hacer para modificar un valor de un arreglo SIN MUTAR EL ARREGLO ORIGINAL(NO MUTA)
// Donde tech es cada uno de los elementos del arreglo(La funcion de flecha itera cada uno de los elementos del arreglo)
const tecnologia6 = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Angular'];
const tecnologias7 = tecnologia6.map((tech) => {
    // Estamos buscado que cuando el elemento sea 'Node.js' cambie a 'Express.js'
    if (tech === 'Node.js') {
        return 'Express.js';
    } else {
        return tech; // Cualquier otro elemento que no se Node.js
    }
});



