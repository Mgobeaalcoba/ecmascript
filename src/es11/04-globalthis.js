/*
Objeto global para cualquier plataforma
El motor de JavaScript, aquel que compila tu archivo y lo convierte en código que entiende el computador, al iniciar la compilación crea un objeto global.

El objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno. Dependiendo la plataforma, este objeto global tendrá un nombre diferente.

En el navegador el objeto global es window, para Node.js es global, y así para cada entorno. Sin embargo, en Node.js no podrás acceder a window, ni en el navegador podrás acceder a global.

Para estandarizar el objeto global se creó globalThis, un objeto compatible para cualquier plataforma.
*/

console.log(window); // Funciona en el navegador. 
console.log(global); // Funciona en node.js (Al correr codigo JS en VSC lo estamos haciendo en node.js)
console.log(selft) // Funciona en webworker
console.log(globalThis); // Funciona en cualquier lado. Navegador, node.js, webworker, Etc. 