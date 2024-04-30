// Medir performace y como manejar multiples consultas

const url = 'https://jsonplaceholder.typicode.com/comments'; // Trae comentarios de la API
const url2 = 'https://jsonplaceholder.typicode.com/todos'; // Trae comentarios de la API
const url3 = 'https://jsonplaceholder.typicode.com/photos'; // Trae comentarios de la API

// Async / Await
// async convierte la función en asincrona, lo que te da accesos a la propiedad .then
const consultarApi = async () => {

    try {

        // Comensando a medir el performance(Medir tiempo)
        const inicio = performance.now();

        // await espera a que se resuelva la promesa
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Espera a que se resuelva el primer fetch(url1)
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        console.log(data2);

        // Espera a que se resuelva el primer fetch(url2)
        const response3 = await fetch(url3);
        const data3 = await response3.json();
        console.log(data3);

        const fin = performance.now();

        console.log(`El resultado de la primera funcion es: ${fin - inicio} ms`);

    } catch (error) {
        console.log(error.message); // Catch se ejecuta si hay un error de RED directamente
    }

}

consultarApi();

// Solucion a consultas multiples con await
const consultarApi2 = async () => {
    try {

        // Comensando a medir el performance(Medir tiempo)
        const inicio = performance.now();

        // await espera a que se resuelva la promesa y ejecuta todas las peticiones al mismo tiempo
        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);

        const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()]);

        // await espera a que se resuelva la promesa

        console.log(data);

        console.log(data2);

        console.log(data3);

        const fin = performance.now();

        console.log(`El resultado de la segunda funcion es: ${fin - inicio} ms`);

    } catch (error) {
        console.log(error.message); // Catch se ejecuta si hay un error de RED directamente
    }
}

consultarApi2();