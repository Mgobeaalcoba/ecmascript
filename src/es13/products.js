// Llamamos a una API
import fetch from "node-fetch"; // Importo fetch de node.js
// Previamente debo instalarlo en mi consola con  npm install node-fetch

const response = await fetch("https://api.escuelajs.co/api/v1/products"); // Llamo a la API de products de Platzi para consumir su información. 

const products = await response.json(); // Transformo la respuesta de mi API en un JSON con la información de mis productos. 

export { products }; // exporto mi JSON con productos para que sea utilizable en otros archivos. 

/* 
Como se puede observar, en este uso de await ya no es necesario el uso de la palabra reservada async como lo era antes de ES13. Esta es la novedad de top level await.
*/
