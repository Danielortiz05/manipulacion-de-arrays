const products  = ["cheese", "rice", "milk"];
//Recorriendo el array con un for
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log("for", element);
}

//Recorriendo el array con un forEach
products.forEach(product => console.log("forEach", product));