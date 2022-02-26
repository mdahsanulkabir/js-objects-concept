//console.log(this)
const kibria = {
    id : 101,
    money: 50000,
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