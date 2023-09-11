const array = ['Curso', "CSS", "HTML"];

let separator = '--';
let finalString = "";

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    finalString = finalString + element + separator; 
}
console.log("for", finalString);

const joinStrings = array.join(separator);
console.log("join", joinStrings);

