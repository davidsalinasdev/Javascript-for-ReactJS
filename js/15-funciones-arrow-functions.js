// ARROW FUNCTIONS

// 1.- Function expression
const sumarExpression = function (numero1, numero2) {
    console.log(numero1 + numero2);
}

// 2.- Arrow function
const sumarArrowFunction = (numero1, numero2) => {
    console.log(numero1 + numero2);
}

sumarArrowFunction(10, 20);
sumarArrowFunction(15, 30);
sumarArrowFunction(12, 2);

// Comapactar la sintaxis con funciones de flecha
const arrowFunction = (numero1, numero2) => console.log(numero1 + numero2);
arrowFunction(10, 23);
