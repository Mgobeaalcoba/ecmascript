// Trabajar sobre un array y saber si está ahí un elemento
// Parecido al Like en SQL. 

let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers.includes(11)); // Devuelve True o False en función de si está o no el valor que va como atributo dentro de incluides

const list = ["Mariano", "Ana", "Oscar"];

console.log(list.includes("oscar")); // Ojo al buscar string porque JS en este metodo distingue entre mayusculas y minusculas