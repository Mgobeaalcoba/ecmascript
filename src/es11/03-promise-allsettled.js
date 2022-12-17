/*
En alguna situación necesitarás manejar varias promesas y obtener sus resultados. ¿Cómo? Utilizando los métodos Promise.all y Promise.allSettled.

Promise.all
El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas.

El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas. Si al menos una promesa es rechazada, Promise.all será rechazada.

Promise.allSettled
Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.

¿Debería usar Promise.allSettled en lugar de Promise.all? No, porque ambas son muy útiles dependiendo cómo quieras manejar tus promesas.
*/

// Ejemplo de .allSettled: 

const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));

// Output: 
/*
[
  { status: 'rejected', reason: 'Reject' },
  { status: 'fulfilled', value: 'resolve' },
  { status: 'fulfilled', value: 'Resolve 2' }
]
*/

// Ejemplo de .all

Promise.all([promise1, promise2, promise3])
  .then(respuesta => console.log(respuesta))
  .catch(error => console.log(error))

// Output:

// Reject // Ya que no se cumplieron todas las promesas sino solo dos de ellas. 