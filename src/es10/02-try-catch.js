try {
    hello()
} catch (error) {
    console.log(error);
}

// Intenta ejecutar la función hello que no está definida por lo que no puede y esto arroja un error. Entra por el catch e imprime el error arrojado por consola

// Lo mismo se puede lograr de la siguiente forma desde es10:

try {
    anotherFn()
} catch {
    console.log("Hola has tenido un error.")
}

// La novedad es poder imprimir o ejecutar cualquier codigo ademas de mostrar el error en el catch. 

// Output: 
// Hola has tenido un error.