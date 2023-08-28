const array = [1, 2, 3, 5];

let par = false;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element % 2 ===0){
        par = true;
        break
    };
};
console.log(par);

// Usando some

const respuestaSome = array.some(number => number % 2 ===0);
console.log("Uso de some", respuestaSome);

// Usando some con objetos
const products = [{
    name:"Jeans", price: 210, delivered: false
},
{
    name:"Pants", price: 110, delivered: false
},
{
    name:"Shirt", price: 210, delivered: false
},
{
    name:"Scarf", price: 210, delivered: false
}
];

const isDelivered = products.some(product => product.delivered);
console.log("Some con objetos", isDelivered);

// Usando some con una libreria

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 7),
    endDate: new Date(2021, 1, 1, 8),
}

const areIntervalOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) =>{
    return dates.some(date => {
        return areIntervalOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    });
};

console.log("Uso de some y librerias", isOverlap(newAppointment));