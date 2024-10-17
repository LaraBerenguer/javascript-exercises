//ex1
let noms = ['Anna', 'Bernat', 'Clara'];
const print = name => {
    console.log(name);
};
noms.forEach(print);

//ex2
for (let name of noms) {
    console.log(name);
};

//ex3
let nums = [1, 2, 3, 4, 5, 6];
let evenNumber = nums.filter((num, currentValue) => (num % 2 == 0));
console.log(evenNumber);

//ex4
let obj = { 
    nom: "Ona",
    edat: 25,
    ciutat: 'Barcelona' 
};

for (content in obj) {
    console.log(content, obj[content]);
};

//ex5
for(content of nums) {
    console.log(content);
    if (content ==5){
        break;
    }
};

//ex6 op1
for(nombre of noms.entries()) {
    console.log(nombre);
};

//ex6 op2
for([i, nombre] of noms.entries()) {
    console.log(`Index: ${i}, value: ${nombre}`);
}

