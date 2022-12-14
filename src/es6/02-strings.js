// Template literals: 

let hello = "Hello";
let world = "World";

// Concatenar antes de EcmaScript6: 

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Concatenar con Template literals post ES6: Con comillas francesas

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-line strings: 

let lorem = "esto es un string";
let lorem2 = 'esto tmb es un string \ny acá hubo un salto de linea'; // Previo a ES6 se usaba el \n para salto de linea. 
console.log(lorem2);

let lorem3 = `Esta tmb es una frase con
mas de un nivel en su escritura
y lectura solo que sin el signo 
anterior` // Post ES6 es similar a la triple comilla en Kotlin. 

console.log(lorem3);
