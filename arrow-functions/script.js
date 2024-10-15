//ex1
const add = (x, y) => {
    return x + y;
}

console.log(add(2, 3));

//ex2
const randomNumber = () => {
    return Math.floor(Math.random() * 101);
}

console.log(randomNumber());

//ex3
class Person {
    constructor(name) {
        this.name = name;
    }
}

const greet = () => {
    const newPerson = new Person("Pepe");
    console.log(`Hola, ${newPerson.name}.`);
}

greet();

//ex4
const printConsole = (num) => {
    console.log(num);
}

const printNumbers2 = (array) => {
    for(i=0; i<array.length; i++) {        
        printConsole(array[i]);
    }
}

const array2 = [22,5,78,12];
printNumbers2(array2);

//ex5

const myFunction = () => {
    console.log("Hola!");
}
setTimeout(myFunction, 3000);






