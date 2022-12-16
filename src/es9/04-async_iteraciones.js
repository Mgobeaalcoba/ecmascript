// en ES6 se introducen los generators. Vamos a combinarlos con asincronismo: 

async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value)); // return implicito acá
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello!!!');

// El output acá será: 
/*
Hello!!!
1
2
3
*/

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Mariano','Nicole','Lautaro','Lisandro']);
console.log('After')

/*
After
Mariano
Nicole
Lautaro
Lisandro
*/