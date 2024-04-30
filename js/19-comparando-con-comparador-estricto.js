// Comparando con comparador estricto

/* OPERADORES DE COMPARACION
* 
* == Igual que(Comparador no estricto)
* === Identico que(Comparador estricto)

*/

const numero1 = 20;
const numero2 = 20;

// Comparando con comparador estricto(Revisa el valor y el tipo de dato)
if (numero1 === numero2) {
    console.log('Los valores son iguales');
} else {
    console.log('Los valores son diferentes');
}

// Comparando con comparador no estricto
if (numero1 == numero2) {
    console.log('Los valores son iguales');
} else {
    console.log('Los valores son diferentes');
}