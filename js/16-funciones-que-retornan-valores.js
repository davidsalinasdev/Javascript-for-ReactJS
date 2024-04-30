// Funciones que retornan Valores

// 1.-Esto es un(Function declaration)
function sumarDeclaration(numero1, numero2) {
    return (numero1 + numero2);
}
const resultadoDeclaration = sumarDeclaration(10, 21);
console.log(resultadoDeclaration);
// 2.- Function expression
const sumarExpression = function (numero1, numero2) {
    return (numero1 + numero2);
}
const resultadoExpression = sumarExpression(10, 20);
console.log(resultadoExpression);

// Segunda caracterista de los arrow functions
const sumarArrow = (numero1, numero2 = 6) => (numero1 + numero2);
console.log(sumarArrow(10, 22));


