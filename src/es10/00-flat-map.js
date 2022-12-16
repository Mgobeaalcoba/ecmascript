// Qué es el aplanamiento de arrays 
// El aplanamiento consiste en transformar un array de arrays a una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.

const array = [1,2,3,4,5,6,[7,8,9,[10,11]]]
console.log(array);
// Output:
// [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9, [ 10, 11 ] ] ]
console.log(array[6]);
// Output:
// [ 7, 8, 9, [ 10, 11 ] ]
console.log(array[6][3]);
// Output:
// [ 10, 11 ]

// Puedo aplanar todo esto en un unico array con .flat() y pasando como atributo la cantidad de niveles a aplanar: 

// aplanemos con map: 

console.log(array.flat(3));
// Output:
/* 
[
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10,
   11
]
*/
console.log(array.flat(2));
// Output:
/* 
[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
*/
console.log(array.flat(1));
// Output:
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ] ]

// aplanemos con flatmap:

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2])); 
// por cada elemento del array2 va a armar un nuevo array con el mismo elemento y pegado al lado el elemento multiplicado por dos
// Output: 
/*
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
*/
