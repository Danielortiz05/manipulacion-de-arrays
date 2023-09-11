const fruits = ['apple', 'pear', 'strawberry'];
const meats = ['chicken', 'fish', 'pork meats'];

let food = [...fruits];
for (let index = 0; index < meats.length; index++) {
    const element = meats[index];
    food.push(element);
}
console.log('for', food);

const newArray = fruits.concat(meats);
console.log('concat', newArray);

const newArray2 = [...fruits, ...meats];
console.log('spread operator', newArray2);