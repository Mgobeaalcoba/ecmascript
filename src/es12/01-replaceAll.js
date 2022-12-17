/*
Método replaceAll
El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.

Este método recibe dos argumentos:

El patrón a reemplazar, puede ser un string o una expresión regular.
El nuevo elemento que sustituye al reemplazado.
Este procedimiento fue creado para solucionar el problema que tenía el método replace, que realizaba la misma función de reemplazar elementos, pero solamente una sola vez por invocación.
*/

const mensaje = "JavaScript es un maravilloso lenguaje de programación. Por eso amo JavaScript";

const replacemensaje = mensaje.replace("JavaScript","TypeScript");

console.log(replacemensaje);

/*
Output:
TypeScript es un maravilloso lenguaje de programación. Por eso amo JavaScript

Como vemos reemplazo solo la primera vez la palabra que queriamos reemplazar con el metodo replace. Para reemplazarlo en todas se usa replaceAll así: 
*/

console.log(mensaje.replaceAll("JavaScript","Python"));

/*
Output:
Python es un maravilloso lenguaje de programación. Por eso amo Python.

Aclaración: no corre en node.js aún porque no ha implementado las mejoras de ES12 node.js en su ultima versión aún. Si corre en la consola de cualquier web. 

Actualice Node.Js a su versión 18 y ahora si corre. 
*/