// ¿Como se hacia antes y como se hace post ES6?

function newUser (name, age, country) {
    var name = name || 'Oscar'; // Si no se pasa el parametro es 'Oscar'
    var age = age || 34; 
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser(); // Trae el defecto
newUser('Mariano',35,'AR'); // Trae lo que pasamos

// Nueva forma con ES6: 

function newAdmin (name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin(); // Trae el defecto
newAdmin('Mariano Daniel',28,'PE'); // Trae lo que pasamos