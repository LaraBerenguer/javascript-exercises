//ex1
const fruit = ["Tomate", "Apple", "Melon"];
const sweet = ["Muffin", "Chocolate", "Pie"];

const food = [...fruit, ...sweet];

console.log(food);

//ex2
const suma = (...nums) => {
    console.log(nums);
    let added = nums.reduce((accum, currentValue) => {return accum + currentValue}, 0);
    console.log(added);
};

suma(3, 4, 1, 99);

//ex3
const obj1 = {
    id: 1,
    name: "Pepe",
};

let obj2 = {...obj1};
console.log(obj2);

obj2.name = "Lara";
console.log(obj1, obj2);

//ex4
let people = ["Pepe", "Lara", "Juan", "Luis", "Anna"];

const [a, b, ...c] = people;

console.log(c);

//ex5
const tomate = (arg1, arg2, arg3) => {
    console.log(arg1);
}

const frutas = ["Manzana", "Naranja", "Pera"];

tomate(...frutas);

//ex6
const place = {
    city: "Barcelona",
    country: "Spain"
}

const weather = {
    forecast: "Windy",
    temperature: "26"
}

const mix = {...place, ...weather};
console.log(mix);
console.log(mix.forecast);








