// Condicionales con JavaScript

const disponible = 4000;
const retirar = 3000;

const auth = false;

if (auth) {
    console.log('Acceso permitido');
} else {
    console.log('Acceso denegado inicie sesión');
}

/* OPERADORES DE COMPARACION
* > Mayor que
* < Menor que
* >= Mayor o igual que
* <= Menor o igual que
* == Igual que
* === Identico que(estricto)
* != Diferente que
* !== Identico que(No estricto)
* && Y
* || O
* ! No(negación)
* ? Ternario
* switch
* default
* break
*/

if (disponible >= retirar) {
    console.log('Puedes retirar');
} else {
    console.log('No puedes retirar');
}



