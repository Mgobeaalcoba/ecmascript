// enahced (mejora) object literals

// Función que recibe variables y retorna un objeto antes de ES6:

function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    };
}

console.log(newUser("Mariano", 34, "Argentina"));

// Pos ES6 con object literals se puede hacer así: 

function newUser2(user, age, country) {
    return {
        user, 
        age,
        country
    };
}

console.log(newUser2("Mariano", 34, "Argentina"));