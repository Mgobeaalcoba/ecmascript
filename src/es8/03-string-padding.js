// metodo para trabajar con strings

const string = 'Hello';

console.log(string.padStart(10,'hi')); 

// Nos entrega un string de 10 caracteres donde rellena adelante los caracteres que faltan con el segundo atributo que pasamos

// Output: hihihHello

console.log(string.padEnd(10,'hi')); // Lo mismo pero rellenando atras

// Output: Hellohihih