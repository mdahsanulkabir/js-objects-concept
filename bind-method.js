


const kibria = {
    id : 101,
    money: 5000,
    name: 'RJ Kibria',
    major : 'mathematics',
    treatDe: function(expense){
        this.money = this.money - expense;
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

//kibria.treatDe(200);

const heroTreatDe = kibria.treatDe.bind(heroBalan);
const normalTreatDe = kibria.treatDe.bind(normalGolam);
heroTreatDe(200);
normalTreatDe(500);