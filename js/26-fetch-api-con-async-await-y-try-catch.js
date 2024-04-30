// Fetch API con Async / Await y try-catch

const url = 'https://jsonplaceholder.typicode.com/comments'; // Trae comentarios de la API



// fetch API utiliza promises(Puedes pensaar de promise como un objeto que puede estar a futuro o no)
fetch(url)
    .then(response => {
        // Controlamos el error de URL
        if (response.ok === true) {
            return response.json()
        }
        // En caso de error de URL
        throw new Error('Error de URL personalizado'); // Este error pasa al catch
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {// Catch se ejecuta si hay un error de RED directamente
        console.log(error.message);
    })

// Async / Await
// async convierte la función en asincrona, lo que te da accesos a la propiedad .then
const consultarApi = async () => {

    try {
        // await espera a que se resuelva la promesa
        const response = await fetch(url);
        if (!response.ok) {
            // En caso de error de URL
            throw new Error('Error de URL personalizado, async/ await'); // Este error pasa al catch
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error.message); // Catch se ejecuta si hay un error de RED directamente
    }

}

consultarApi();