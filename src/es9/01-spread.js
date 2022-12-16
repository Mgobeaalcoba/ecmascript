/* 
Propiedades de propagación
Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.
*/

const user = {
    username: 'Mariano',
    age: 34,
    country: 'AR'
}

// Si antes quería desarmar este objeto lo hacía así: 

//const {username, age, country} = user;

//console.log(user);
//console.log(username);
//console.log(age);
//console.log(country);

/*
Output: 
{ username: 'Mariano', age: 34, country: 'AR' }
Mariano
34
AR
*/

// Si quiero usar el spread operator para desarmar mi objeto lo hago así: 

const {username, ...values} = user;

// IMPORTANTE: la variable de separación que quiero dejar sola debe llamarse igual que la propiedad de mi objeto. 

console.log(user);
console.log(username);
console.log(values);

/*
Output: 
{ username: 'Mariano', age: 34, country: 'AR' }
Mariano
{ age: 34, country: 'AR' }
*/