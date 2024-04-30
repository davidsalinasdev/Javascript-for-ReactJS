// Eventon DOM - click

const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');


// Con querySelector
heading.addEventListener('click', () => {
    heading.textContent = 'Un nuevo heading';
})

// Con querySelectorAll

enlaces.forEach((enlace) => {
    enlace.addEventListener('click', (event) => {

        event.preventDefault();
        event.target.textContent = 'Diste click...'; // Tu tienes un comportamiento de abrir una URL no lo hagas
        console.log(event.target);
    })
})