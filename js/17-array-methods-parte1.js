// Array methods parte 1

const tecnologias = ['JavaScript', 'React.js', 'Node.js'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1.- Filter (Iteran sobre cada uno de los elementos)
const nuevoArreglo = tecnologias.filter((tech, index) => tech === 'Node.js'); // Imprime solo el elemento 'Node.js'
console.log(nuevoArreglo);

const resultado = numeros.filter(num => num > 5); // Imprime solo los elementos MAYORES a 5
console.log(resultado);

// 2.- Includes - (Devuelve true si el elemento existe, false si no existe)
const resultadoIncludes = tecnologias.includes('Node.js'); // Imprime true o false
console.log(resultadoIncludes); // Imprime true


// Array methods parte 2

// 1.-Some (Devuelve si al menos uno cumple la condicion)
const resultadoSome = numeros.some(num => num > 10); // Imprime true o false 
console.log(resultadoSome); // Imprime true

// 2.- Find - (Devuelve el primer elemento que cumple una condicion)
const resultadoFind = numeros.find(num => num > 5); // Imprime el primer elemento MAYOR a 5
console.log(resultadoFind); // Imprime 6

// 3.- Every - (Retorna true o false si todos cumplen la condicion)
const resultadoEvery = numeros.every(num => num < 11); // Imprime true o false
console.log(resultadoEvery); // Imprime true

// 4.- Reduce -(Retorna un acumulado de l total)
const resultadoReduce = numeros.reduce((total, numeroElemento) => total + numeroElemento, 0); // Imprime el total
console.log(resultadoReduce); // Imprime 55