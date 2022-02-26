

//Comparing object

const first = {a: 1, b:2};
const second = {a : 1, b:2};
const third = first;

if(first == third){
    console.log('objects are equal');
}
else{
    console.log('objects are not equal');
}

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if(JSON.stringify(first) === JSON.stringify(second)){
    console.log('objects are equal');
}
else{
    console.log('objects are not equal');
}

const obj1 = {a: 1, b:2};
const obj2 = {b:2, a : 1};

function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
        else 
            return true;
    }
}

const result = compareObjects(obj1, obj2);
console.log(result);