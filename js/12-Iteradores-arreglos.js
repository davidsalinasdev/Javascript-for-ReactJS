// Iteradores de arreglos

const tecnologias = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Angular'];

// Nunca escribir para pintar de esta forma un arreglo
console.log(tecnologias[0]);
console.log(tecnologias[1]);
console.log(tecnologias[2]);
console.log(tecnologias[3]);
console.log(tecnologias[4]);
console.log(tecnologias[5]);


for (let i = 0; i < tecnologias.length; i++) {
    const element = tecnologias[i];
    console.log(element);
}

// Tres alternativa al FOR-LOOP(foreach, map, filter, reduce)

// 1.- forEach
tecnologias.forEach((tech) => {
    console.log(tech);
})

// 2.- map (Crea un nuevo arreglo en base a las condiciones o funcion que se pasa), su caracterisca principal es de crear un nuevo arreglo(NO MUTA)
const arrayMaps = tecnologias.map((tech) => {
    return tech;
})
console.log(arrayMaps); // Imprimiendo nuevo array


// 3.- for...of

for (const tech of tecnologias) {
    console.log(tech);
}




