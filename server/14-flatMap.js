const users = [
    {id: 1, username: "José", attributes: ['Nice', 'Cute']},
    {id: 2, username: "Carlos", attributes: ['Lovely']},
    {id: 3, username: "Juan", attributes: ['Nice', 'Cool']},
]

const newArray = users.map(user => user.attributes).flat();
const newArray2 = users.flatMap(user => user.attributes);
console.log("flatMap", newArray2);
console.log("flat-map", newArray);
