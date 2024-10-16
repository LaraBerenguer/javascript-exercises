//ex1
const process = (num, callback) => {
    callback(num);
}

const number = num => {
    console.log(`My number is ${num}`);
}

process(5, number);

//ex2
const calculadora = (num1, num2, callback) => {
    callback(num1, num2);
}

const add = (a, b) => {
    console.log(`Result is ${a + b}`);
}

calculadora(10,6,add);

//ex3
const waitAndGreet = (name, callback) => {
    setTimeout(callback, 2000, name);
}

const hi = nom => {
    console.log(`Hi, ${nom}`);
}

waitAndGreet("Luis", hi);

//ex4
const processElements = (array, callback) => {
    for (i=0; i<array.length; i++) {
        callback(array[i]);
    }
}

const fruits = ["Tomato", "Apple", "Melon"];

const print = element => {
    console.log(`Array element: ${element}`);
}

processElements(fruits, print);

//ex5
const processChain = (chain, callback) => {
    const chainUpper = chain.toUpperCase();
    callback(chainUpper);
}

const tomate = `Holi!`;

const printing = string => {
    console.log(`Upper case: ${string}`);
}

processChain(tomate, printing);