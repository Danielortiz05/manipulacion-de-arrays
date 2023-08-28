const array = [24, 10, 84, 42, 61];

let respuesta = true;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element >= 30){
        respuesta = false;
    }
}
console.log(respuesta);

// Usando every
const respuestaSome = array.every(number => number >= 20);

console.log(respuestaSome);

// Usando every con objetos
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

const respuestaSome2 = team.every(player => player.age >=15);
console.log("", respuestaSome2);