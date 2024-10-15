//ex1
const potConduir = age => {
    return console.log(age > 18 ? "Pots conduir" : "No pots conduir");
}

potConduir(19);

//ex2
const compareNum = (num1, num2) => {
    return console.log(num1>num2 ? `${num1} és més gran` : `${num2} és més gran`);
} 

compareNum(100, 101);

//ex3
const isPositive = num => {
    let isPositive = (num > 0) ? `Positivo` : (num == 0) ? `Es 0` : `Negativo`;
    return console.log(isPositive);
}
isPositive(0);

const findMax = (a,b,c) => {
    let numMax = (a>b && a>c) ? `${a} es el más grande.` : (b>c) ? `${b} es el más grande.`: `${c} es el más grande.`;
    return console.log(numMax);
}
findMax(10,5,1);

//ex4
let array = [1,9,10,8,120,0];

const parOImpar = array => {
    for (i=0; i<array.length; i++) {
        console.log(array[i]%2 == 0 ? `${array[i]} es par` : `${array[i]} es impar`);        
    }
}

parOImpar(array);






