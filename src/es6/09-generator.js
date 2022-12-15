// Generadores: funciones especiales

function* iterate(array) { // Se declara con function*
    for (let value of array) { // Es fundamental que haya un ciclo en el iterador para variar el resultado devuelto
        yield value; // Retorna con yield.
    }
}

const array = ["Oscar","David","Ana","Ulises","Jeniffer"];
const it = iterate(array);

/*
console.log(it.next().value); // Devuelve Oscar. El primer valor del array pasado. 

// ¿Pero y  que pasaría si yo tengo mas de una linea de pedido de value? 

console.log(it.next().value); // Devuelve David
console.log(it.next().value); // Devuelve Ana
console.log(it.next().value); // Devuelve Ulises
console.log(it.next().value); // Devuelve Jeniffer

console.log(it.next().value); // Devuelve undefined porque se acabo mi array. 
*/

// Otra forma de iterar el generador es: 
for (let index = 0; index < array.length + 5 ; index++) {
    console.log(it.next().value);
}
/* Devuelve: 

Oscar
David
Ana
Ulises
Jeniffer
undefined
undefined
undefined
undefined
undefined
*/

// Solución al reto del curso y reto: 
/*
En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.

Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next() se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.

Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

const id = getId();
id.next().value

El identificador puede ser de cualquier tipo (números o cadenas de texto), la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.

Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

Ejemplo 1:

Input:

const id = getId()
id.next().value
id.next().value
id.next().value

Output:

1
2
3

Ejemplo 2:

Input:

const id = getId()
id.next().value
id.next().value
id.next().value
*/

function* getId() {
  let catID = 1
  while (true) {
    yield catID++
  }
}

const catId = getId();
console.log(catId.next());
console.log(catId.next());
console.log(catId.next());
console.log(catId.next());
console.log(catId.next());

/*
Resultados: 

{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }

*/

// Otra: 


function* getId() {
    while (true) {
      yield Math.random().toString(36).substring(5).toUpperCase();
    }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value); // Podría repetirlo infinitas veces porque while true se cumple siempre. 

/*Results examples 

["I84P6YK","O7QL83M8","N5NCIQ1","JY6GGDYF","KLUY7TJQ","PAIU4RJB""Y5HUKX1M","SJWKL74O","62C1OBY7","783334YA"]

*/