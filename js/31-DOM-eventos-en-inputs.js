// Eventos en el DOM con inputs

const inputNombre = document.querySelector('#nombre');

inputNombre.addEventListener('input', (event) => {

    console.log(event.target.value);

});

const inputPassword = document.querySelector('#password');
inputPassword.addEventListener('input', (event) => {
    inputPassword.type = 'text';

    setTimeout(() => {
        inputPassword.type = 'password';
    }, 500); // 1/2 segundos
})

