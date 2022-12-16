// Copy - paste de promise.js en es6 para ver Finally: 

// Vamos a crear una función arrow
// Promesa: algo que va a pasar, puede ser hoy, mañana o nunca

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!!');
        } else {
            reject('Whooooops!!!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    // Podemos tener otros then en el medio. 
    .catch(err => console.log(err))
    // Acá viene el agregado de ES9: finally:
    .finally(() => console.log('Finnaly'));