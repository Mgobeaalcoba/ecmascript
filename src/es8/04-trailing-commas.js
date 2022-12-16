const ages = [24,34,25,34];

console.log(ages);
console.log(ages.length);

/* Output: 
[ 24, 34, 25, 34 ]
4
*/

// Con trailing-commas puedo dejar espacios vacios en mi array (empty items). Un espacio vacio debe estar delimitado por dos comas. Una de cada lado. Sino no se cuenta como tal. 

const ages2 = [24,34,25,34, , , ,];

console.log(ages2);
console.log(ages2.length);

/* Output: 
[ 24, 34, 25, 34, <3 empty items> ]
7
*/