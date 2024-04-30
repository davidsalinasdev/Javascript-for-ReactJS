// Eventos del DOM - submit

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (event) => {

    event.preventDefault(); // Para que no se recargue la página

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    if (nombre === '' || password === '') {
        console.log('No se permiten campos vacios');
    } else {
        console.log('Todo bien iniciando sesión...');
    }


    // console.log(nombre);
    // console.log('Enviando formulario...');


})
