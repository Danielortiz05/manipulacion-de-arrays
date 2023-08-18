const array = ["dog", "cat", "lion", "bird"];

//Filtrar con un for
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.length >= 4){
        console.log(element);
    }
}

//Usando el método filter

const array1 = array.filter(pet => pet.length >= 4);
console.log("Original", array);
console.log("Filter", array1);

const products = [{
        name:"Jeans", price: 210, delivered: true
    },
    {
        name:"Pants", price: 110, delivered: true
    },
    {
        name:"Shirt", price: 160, delivered: true
    },
    {
        name:"Scarf", price: 780, delivered: true
    }
];

const array2 = products.filter(product => product.delivered && product.price >= 200);
console.log(products);
console.log(array2);

//Ejemplo buscador
const search = (query) =>{
    return products.filter(product =>{
        return product.name.includes(query);
    }) 
}
console.log(search("i"));