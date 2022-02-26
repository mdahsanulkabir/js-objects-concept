//different ways to create object

//1. using object literal
const student = {name: 'Sakib Al Hasan', job:'cricker'};


//2. Object constructor
const person = new Object();
//console.log(person);


//3. 
const human1 = Object.create(null);
const human = Object.create(student);
//console.log(human.job);


// 4. class         or   Syntactical Sugar
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const people = new People('Manush', 12);
//console.log(people);


//5. function 
function Manush(name){
    this.name = name;

}
const man = new Manush('kader');
console.log(man);