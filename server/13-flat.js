const matriz = [
    [1, 2, 3],
    [5, 4, 1],
    [9, 2, 7]
]

let newArray = [];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);


const newArray2 = matriz.flat();
console.log(newArray2);
