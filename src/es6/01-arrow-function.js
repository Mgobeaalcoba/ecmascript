// Funciones flecha o de tipo flecha. Functions =>

function square(num) {
    return num * num;
}

// La misma función con una sintaxis mas amigable y sencilla se logra con las arrow functions:

const square = (num) => {
    return num * num; 
} // No así sino como se declara así abajo: 

const square = num => num * num;

// Las tres arrojan el mismo resultado. Pero en la ultima el codigo es mas simple y tiene el return implicito. 