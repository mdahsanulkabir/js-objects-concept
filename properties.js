//KEY VALUE PAIR

const bottle = {
    color : 'yellow',
    hold: 'water',
    price : 50,
    isCleaned: true
};


//getting all properties name    Object.keys(objectname)
const keys = Object.keys(bottle);
console.log(keys);

//get the values        Object.values(objectname)
const values = Object.values(bottle);
console.log(values);

//get both keys and values   Object.entries(objectname)
const entities_pair = Object.entries(bottle);
console.log(entities_pair);

//clear a property from an object
delete bottle.isCleaned;
console.log(bottle);

Object.seal(bottle);  //to protect from delete... but the property can be changed
delete bottle.price;
console.log(bottle);

Object.freeze(bottle); //cant delete, also can't chagne property value
bottle.price = 10000;
console.log(bottle.price);