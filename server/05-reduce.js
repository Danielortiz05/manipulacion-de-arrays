const numbers = [1, 2, 3, 4];

//Reduciendo a un único valor con un for

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum = sum + element;
}

console.log(sum);

const newSum = numbers.reduce((sum, item) => sum + item, 0);

console.log(newSum);