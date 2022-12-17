/*
Método matchAll para expresiones regulares
El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento.

string.matchAll(regex)

En el iterable, existe una propiedad denominada index con el índice del string donde la búsqueda coincide.
*/

const regex = /\b(Apple)+\b/g

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

/*
Output:
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 21,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
*/

