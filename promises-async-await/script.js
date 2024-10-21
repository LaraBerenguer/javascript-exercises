//ex1
new Promise(() => { setTimeout(() => { (console.log("Hola, mundo 1")) }, 2000) })

//ex2
new Promise((resolve) => { setTimeout(() => { resolve("Hola, mundo 2") }, 2000) })
    .then((mensaje) => { console.log(mensaje) });

//ex3
const myInput = input => {
    return new Promise((resolve, reject) => {
        if (input != "Hola") {
            reject("No es hola");
        }

        setTimeout(() => { resolve("Bien!"); }, 2000);
    })
}

myInput("Hola")
    .then((mensaje) => { console.log(mensaje) })
    .catch((mensaje) => { console.error(mensaje) });

//ex4
async function pruebaAwait() {
    const respuesta = await myInput("Hola");
    console.log("Await: " + respuesta);
};

pruebaAwait();

//ex5
async function otroAwait() {
    try {
        const respuesta2 = await myInput("Hola");
        console.log("otroAwait: " + respuesta2);
    }
    catch (error) {
        console.error("otroAwait: " + error)
    }
};

otroAwait();

//ex6
Promise.all([
    new Promise((resolve) => {
        setTimeout(() => { resolve("Esto es una promise") }, 2000)
    }),

    new Promise((resolve) => {
        setTimeout(() => { resolve("Esto es otra promise") }, 3000)
    })
])
.then(bothValues => {console.log(bothValues)});









