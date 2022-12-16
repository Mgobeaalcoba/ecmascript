/*
Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.
*/

const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
};

console.log(Object.entries(countries));

/*
Retorna un array de arrays con los distintos pares llave valor de mi objeto: 

[
  [ 'MX', 'Mexico' ],
  [ 'CO', 'Colombia' ],
  [ 'CL', 'Chile' ],
  [ 'PE', 'Peru' ]
]

*/