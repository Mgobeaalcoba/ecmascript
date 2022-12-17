const butoon = document.getElementById('btn');

// Importo recien cuando ejecuto una acción. Esto sirve para hacer mis paginas web mucho mas rapidas que importando todo al principio.

butoon.addEventListener('click', async function () {
    const module = await import("./module.js");
    console.log(module);
    module.hello();
});