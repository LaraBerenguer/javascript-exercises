//Arrays de números
const nums = [1, 2, 3, 4];
const nums2 = [1, 10, 8, 11];
const nums3 = [13, 7, 8, 21];

//ex1 Map
console.log(nums.map(num => num * num));

//ex2 Filter
let newNums = [];
newNums = nums.filter(num => (num % 2 == 0));
console.log(newNums);

//ex3 Find
console.log(nums2.find(num => num > 10));

//ex4 Reduce
console.log(nums3.reduce((suma, currentValue) => suma + currentValue, 0));

//ex5 Filter, map, reduce
const nums4 =[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];
const operation = array => {console.log((array.filter(num => (num>=10))).map(num => num*2).reduce((suma, currentValue) => suma + currentValue, 0))};
operation(nums4);
//Duda: cómo ver en debug el "nuevo" array (ya con el filter, por ejemplo)

//ex6
const nums5 = [3,11,12,13,14];
console.log(nums5.every(num => num>10));
console.log(nums5.some(num => num>10));



