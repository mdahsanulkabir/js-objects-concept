


const kibria = {
    id : 101,
    money: 5000,
    name: 'RJ Kibria',
    major : 'mathematics',
    treatDe: function(expense, bokshish){
        this.money = this.money - expense - bokshish;
        console.log(this);
        return this.money;
    }
}

const heroBalan = {
    id: 102,
    money: 6000,
    name : 'Hero Balam'
}

const normalGolam = {
    id: 103,
    money: 8000,
    name : 'Normal Golam'
}


//call
kibria.treatDe.call(heroBalan, 200, 100);

//apply
kibria.treatDe.apply(normalGolam,[500, 100])