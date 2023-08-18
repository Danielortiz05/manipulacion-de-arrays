const array = [1, 2, 1, 6, 7, 1, 2];

const arrayReduce = array.reduce((obj, number) =>{
    if(!obj[number]){
        obj[number] = 1;
    }else{
        obj[number] = obj[number] + 1;
    }
    return obj;
}, {});

console.log(arrayReduce);