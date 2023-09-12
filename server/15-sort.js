const numbers = [2, 1, 8, 110000, 7, 54];
console.log(numbers.sort((a, b) => a - b));

const strings = ['José', 'Carlos', 'Alberto', 'Ernesto'];
console.log(strings.sort());

const items = [
    {name: 'Camisa', price: 500},
    {name: 'Jeans', price:20},
    {name: 'Chaqueta', price: 250},
    {name: 'Zapatos', price: 2000}
]
console.log(items.sort((a,b) => b.price - a.price));