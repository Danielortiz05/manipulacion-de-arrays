let fruits = ['apple', 'strawberry', 'pear'];

let includeItem = false;
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    if(element === 'apple'){
        includeItem = true;
        break;
    }
}

console.log('for', includeItem);

const rta = fruits.includes('apple');
console.log('includes', rta);