const numbers = [1, 2, 3, 4, 5];
const newArray = []
//Manipular arrays con for 

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    newArray.push(element * 2);
}

//Manipular arrays con map
const newArray2 = numbers.map(number => number*2);

console.log(newArray);
console.log(numbers);
console.log(newArray2);