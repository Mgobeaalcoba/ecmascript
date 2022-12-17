// Trabajo con nulos: 

const anotherNumber = 1;
const validate = anotherNumber ?? 5;

console.log(validate)

// Output: 1

const anotherNumber2 = null;
const validate2 = anotherNumber2 ?? "Hola";

// El operador ternario ?? significa que si es nulo debe reemplazarlo por lo que venga despues.

console.log(validate2)

// Output: 5