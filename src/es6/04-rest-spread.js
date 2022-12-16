/* 
La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.
*/

// Arrays destructuring:

let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Separo en variables autonomas el contenido de mi array.
console.log(a, b);

// Es el equivalente, desestructurado, de:

console.log(fruits[0], fruits[1]);

// Object destructuring:

let user = {
  username: "Mariano",
  age: 34,
  country: "Argentina",
};

let { username, age, country } = user;
console.log(username, age, country); // Separo en variables cada atributo de mi objeto.

// Es el equivalente, desestructurado, de:

console.log(user.username, user.age, user.country);

// spread operator: Sirve para sumar atributos a un objeto ya constituido

let person = {
  name: "Oscar",
  age: 28,
};

let country2 = "MX";

let data = { id: 1, ...person, country2 }; // ... Operador de desestructuración

// Sumo id y country2 como parametros de mi objeto person en un nuevo objeto llamado data.

console.log(data);
console.log(typeof data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3); // El primer 1 va para num y los restantes 3 se agregan en el array "values"
