class User {}; // Declaro mi clase

const newUser = new User(); // Instanceo un objeto de mi clase. 

console.log(newUser);

class User2 {
    // metodos: 
    greeting() {
        return "Hello";
    }
}; // Creo mi clase con metodos

const mgobea = new User2(); // Instanceo

console.log(mgobea.greeting()); // Uso el metodo de mi clase. 

// Puedo generar cuantos usuarios quiera instanciando mi clase.

const gndx = new User2();

console.log(gndx.greeting());

// Constructor: 

class User3 {
    // Constructor: Se ejecuta al instanciar nuestra clase
    constructor() {
        console.log('Nuevo Usuario')
    }
    greeting() {
        return "Hello";
    }
}

const lgobea = new User3(); // Debe ejecutarse el constructor ademas de crear mi instancia/objeto.
console.log(lgobea.greeting());

// this: referencia al elemento padre que lo contiene

class User4 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const lraccio = new User4("Lisandro");
console.log(lraccio.speak());
console.log(lraccio.greeting());

// setters getters

class User5 {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    // setters and getters
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}
