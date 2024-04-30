const saldo = 1000;
const pagar = 500;

const tarjeta = true;

/*
* Logical Or y Logical And
* || = OR (Al menos una se cumpla)
* && = AND (Ambas se cumplan)
*/

// Forma comun
if (saldo >= pagar) {
    console.log('Puedes pagar');
} else if (tarjeta) {
    console.log('Puedes pagar');
} else {
    console.log('No puedes pagar');
}

// Forma corta con logical OR
if (saldo >= pagar || tarjeta) {
    console.log('Puedes pagar');
} else {
    console.log('No puedes pagar');
}

