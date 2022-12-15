// import del modulo modulo armado en module.js

import hello from "./module.js"; // Hay que ver bien las referencias de donde estamos importando
// por defecto JS no pone la extensión en el import. Debo agregarla para que funcione el "type":"module" en mi package.json.

hello() // Llamo a la función que está en module.js

// Con webpack se puede hacer de otra manera. Pero con JavaScript Vanilla (Puro) debo hacer modificaciones en mi archivo package.json para permitir el uso de module.js como un modulo. 
//  "type": "module" agrego a mi json debajo de la licencia. 