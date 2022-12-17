// Trabajo con numeros muy grandes en JS

//Antes de ES11: 
const aBigNumber = 89458762346587923645n

//Dsp de ES11:
const anotherBigNumber = BigInt(89458762346587923645);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Output: si se fijan bien cambian los numeros impresos con el nuevo metodo:

// 89458762346587923645n
// 89458762346587930624n

/*
Super sencillo
JavaScript tiene un límite y este es de 2^53, los números que estan dentro de BigInt(); son mayores a 2^52 por lo que digamos que “JS ya no puede entenderlos por ser cantidades mayores a las que aguanta”

Aunque las pases a la función BigInt(); Como son cantidades que ya no se entienden sus resultado también serán errados.

La mejor opción es ponerle n directamente en lugar de tratar de convertirlas con la función BigInt
*/