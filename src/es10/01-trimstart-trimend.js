/* 
Eliminar espacios en blanco de un string
Existen tres métodos para eliminar espacios en blanco de un string:

El método trim elimina los espacios en blanco al inicio y al final.
El método trimStart o trimLeft elimina los espacios al inicio.
El método trimEnd o trimRight elimina los espacios al final.
*/

const hello = '                Hola          Mundo!!!           '
console.log(hello);

// Output:                 Hola          Mundo!!!   

console.log(hello.trimStart());

// Output: Hola          Mundo!!!           // Sin espacios adelante pero aún con espacios atras. 

console.log(hello.trimEnd());

// Output:                 Hola          Mundo!!! // La inversa. Sin espacios al final. 

console.log(hello.trim());

// Output: Hola          Mundo!!! // Sin espacios ni adelante ni al final. Pero si en el medio. 