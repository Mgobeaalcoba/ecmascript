/*
Top level await permite utilizar la palabra reservada await, sin estar dentro de una función asíncrona con async. Sin embargo, únicamente se puede utilizar await en la parte superior del archivo de un módulo.

Cómo utilizar top level await
Anterior a ECMAScript 13, cuando se introdujo funciones asíncronas, si utilizabas await fuera de async, existirá un error de sintáxis.

Ahora, con top level await esto es posible, sin ningún error. Esto puede servir para importaciones de manera dinámica o iniciar la conexión de tus bases de datos. Siempre y cuando respetes que debe estar en la parte encima del archivo de tipo módulo.
*/

import { products } from "./products.js";

console.log(products);
console.log('Hey!!!');

// Output: 

/*
Me trae toda la info de mi API de products: Voy a pegar solo una parte: 

[
  {
    id: 1,
    title: 'Practical Wooden Chips',
    price: 862,
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=1129'
    },
    images: [
      'https://api.lorem.space/image/fashion?w=640&h=480&r=8223',
      'https://api.lorem.space/image/fashion?w=640&h=480&r=8547',
      'https://api.lorem.space/image/fashion?w=640&h=480&r=5082'
    ]
  },
  {
    id: 2,
    title: 'Incredible Cotton Pants',
    price: 784,
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    category: {
      id: 5,
      name: 'Others',
      image: 'https://api.lorem.space/image?w=640&h=480&r=4839'
    },
    images: [
      'https://api.lorem.space/image?w=640&h=480&r=757',
      'https://api.lorem.space/image?w=640&h=480&r=786',
      'https://api.lorem.space/image?w=640&h=480&r=6602'
    ]
  },
  {
    id: 3,
    title: 'Handmade Granite Ball',
    price: 245,
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8733'
    },
    images: [
      'https://api.lorem.space/image/furniture?w=640&h=480&r=9322',
      'https://api.lorem.space/image/furniture?w=640&h=480&r=4928',
      'https://api.lorem.space/image/furniture?w=640&h=480&r=2165'
    ]
  },
  {
    id: 4,
    title: 'Small Fresh Computer',
    price: 912,
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://api.lorem.space/image/watch?w=640&h=480&r=6572'
    },
    images: [
      'https://api.lorem.space/image/watch?w=640&h=480&r=5844',
      'https://api.lorem.space/image/watch?w=640&h=480&r=913',
      'https://api.lorem.space/image/watch?w=640&h=480&r=1064'
    ]
  },
*/