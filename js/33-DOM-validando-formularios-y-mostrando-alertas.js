// Validando formularios y mostrando alertas
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (event) => {

    event.preventDefault(); // Para que no se recargue la página

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;


    // Previniendo nueva alertas
    const alertaPrevia = document.querySelector('.alerta'); // Selecionamos algo que todavia no existe

    // Verificamos si la alerta existe con (optional chaining '?') ve si un elemento existe o no
    alertaPrevia?.remove();


    // Insertando alertas en el HTML 
    // Crea un elemento de div para la alerta
    const alerta = document.createElement('DIV');

    // Adiciona clases al elemento creado
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'p-2', 'text-center', 'font-black', 'text-sm');


    if (nombre === '' || password === '') {

        alerta.textContent = 'No se permiten campos vacios';
        alerta.classList.add('bg-red-500');

    } else {
        alerta.textContent = 'Iniciando sesión';
        alerta.classList.add('bg-green-500');
    }

    // Agregamos alerta como un hijo de formulario
    formulario.appendChild(alerta);

    // Cerrando las alertas de pues de un tiempo
    setTimeout(() => {
        alerta.remove(); // Eliminando el elemento DIV de HTML
    }, 1000);

    // console.log(nombre);
    // console.log('Enviando formulario...');


})