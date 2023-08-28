const array = [5, 4, 1, 8, 9, 4,];

let respuesta = undefined;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 8){
        respuesta = element;
        break;
    }
};

console.log("Usando for", respuesta);

//Usando find 

const respuestaFind = array.find(number => number ===8);
console.log("Usando find", respuestaFind);

//Usando Objetos
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const idWithFind = products.find(item => item.id ==='🥞');
console.log("El item es: ",idWithFind);

//Uso de findIndex

const idWithFindIndex = products.findIndex(item => item.id ==='🥞');
console.log("El indice es: ", idWithFindIndex);