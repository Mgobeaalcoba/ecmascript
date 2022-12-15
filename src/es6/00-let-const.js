var lastName = "David"; // Declarar y Asignar
lastName = "Oscar"; // Reasignar
console.log(lastName); // Con Ctrl + Alt + N corro el JS gracias a Code Runner (Pluggin instalado en VSC)

let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit); // Tmb se reasigna la variable.

const animal = "Dog";
animal = "Cat";
console.log(animal); // Arroja error ya que no puedo reasignar constantes.

// Vamos a armar una función de forma expresiva con una opción no conocida por el momento

const fruits = () => {
    if (true) {
        var fruit1 = "Apple"; // Se ejecuta bien. Function scope
        let fruit2 = "Kiwi"; // No existe para fuera del if (del bloque donde son declaradas). Block scope
        const fruit3 = "Banana"; // Block scope.
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};

// Ejecuto la función:

fruits();
