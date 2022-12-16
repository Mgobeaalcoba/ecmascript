/*
Cómo transformar un array de arrays en un objeto
El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries().
*/

const arrayEntries = [
    [ 'name', 'Mariano' ],
    [ 'email', 'gobeamariano@gmail.com' ],
    [ 'age', 34 ]
  ] 
  
  const usuario = Object.fromEntries(arrayEntries) 
  
  console.log(usuario)
  /* 
  { name: 'Mariano', email: 'gobeamariano@gmail.com', age: 34 }
  */