const products = [{
        name:"Jeans", price: 210, delivered: true
    },
    {
        name:"Pants", price: 110, delivered: true
    },
    {
        name:"Shirt", price: 210, delivered: true
    },
    {
        name:"Scarf", price: 210, delivered: true
    }
];

const price = products.map( product => product.price);
console.log(price);

//Ejemplo de caso donde se transforma los arrays originales

// const array1 = products.map(product =>{
//     product.taxes = .19;
//     return product;
// });

// console.log(products);
// console.log(array1);

//Ejemplo de caso donde evitamos modificar el array original

const array2 = products.map( product => {
    return {...product, taxes: .19}
});

console.log(products);
console.log(array2);