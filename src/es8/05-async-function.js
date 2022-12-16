// En ECMAScript 2017 o ES8 fue añadida una nueva forma de manejar el asincronismo en JavaScript mediante funciones asíncronas.

// Función promesa: 

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) // If (condicional) ternario
            ? setTimeout(() => resolve('Async!!'), 2000) // Reemplaza el if con ?
            : reject(new Error('Error!')); // Reemplaza el else con :
    })
}

// Sintaxis de Async y Await que son dos nuevas formas de trabajar en JS el asincronismo: 

// Promesa: 
const anotherFn = async () => {
    // Antes de los argumentos va la palabra reservada async
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('Before')
anotherFn();
console.log('After');

// Primero saldrá el Before, luego el After, luego el Async, cuando pase el tiempo del setTimeout (se cumpla la promesa). y finalmente el hello: 

/*
Output: 
Before
After
Async!!
Hello

Dato: Entre el After y el Async hubo una demora de 1 segundo aprox. 
*/

// ¿Que pasaría si hago lo mismo pero sin poner el async y await? ¿En que orden se imprimirían los msjs? Probemos: 

// Función promesa: 

const fnAsync2 = () => {
    return new Promise((resolve, reject) => {
        (true) // If (condicional) ternario
            ? setTimeout(() => resolve('Async!!'), 2000) // Reemplaza el if con ?
            : reject(new Error('Error!')); // Reemplaza el else con :
    })
}

// Sintaxis de Async y Await que son dos nuevas formas de trabajar en JS el asincronismo: 

// Promesa: 
const anotherFn2 =  () => {
    // Antes de los argumentos va la palabra reservada async
    const something =  fnAsync2();
    console.log(something);
    console.log('Hello');
}

console.log('Before')
anotherFn2();
console.log('After');

/*
Output: 
Before
Promise { <pending> } // No se llegó a ejecutar la promesa. 
Hello
After
*/


