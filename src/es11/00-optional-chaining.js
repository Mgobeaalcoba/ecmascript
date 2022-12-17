// Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará undefined.
// Sirve para no romper el flujo en nuestra aplicación. 

const users = {
    gndx: {
        country: 'MX',
        team: 'Chivas'
    },
    mgobea: {
        country: 'AR',
        team: 'Racing'
    }
}

console.log(users);
// Output:
/*
{
  gndx: { country: 'MX', team: 'Chivas' },
  mgobea: { country: 'AR', team: 'Racing' }
}
*/
console.log(users.gndx);
// Output:
/*
{ country: 'MX', team: 'Chivas' }
*/
console.log(users.mgobea.team);
// Output:
/*
Racing
*/
console.log(users.nfernadez);
// Output:
/*
undefined // Ya que no existé este atributo dentro del objeto users. 
*/
//console.log(users.nfernadez.team);
// Output:
/*
Ahora si tenemos un error porque no existe el nivel precedente
TypeError: Cannot read properties of undefined (reading 'team')
*/

// Para que no se rompa el codigo con estos errores es que se generó el optional chaining que funciona así: 

console.log(users?.nfernadez?.team); // Agrego signos de pregunta a los objetos y/o atributos
// Output:
/*
Nota: ahora si vuelve a regresar undefined cuando no existe un atributo buscado mas allá del nivel de profundidad en la busqueda. 
undefined
*/

