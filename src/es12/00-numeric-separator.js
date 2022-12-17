/*
Separadores numéricos
Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución del programa.

Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc.
*/

const value = 10_000_000_000_000_000;
console.log(value);

// Output:
// 10000000000000000
// No se visualizan los separadores al usar el value.