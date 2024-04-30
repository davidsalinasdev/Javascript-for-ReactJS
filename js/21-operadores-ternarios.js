// Operadores ternarios

const auth = true

const saldo = 4000;
const pagar = 500;

const tarjeta = false;

// Forma comun
if (auth) {
    console.log('Acceso permitido');
} else {
    console.log('Acceso denegado inicie sesión');
}

// Forma corta operador ternario
auth ? console.log('Acceso permitido') : console.log('Acceso denegado inicie sesión');

saldo > pagar || tarjeta ? console.log('Puedes pagar') : console.log('No puedes pagar');