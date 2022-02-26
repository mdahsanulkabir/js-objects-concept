

const student = {
    id : 101,
    money: 5000,
    name: 'RJ Kibria',
    major : 'mathematics',
    isRich: false,
    subjects : ['english', 'econonics', 'math-101', 'calculus'],
    bestFriend : {
        name: 'kundu',
        subject: 'mathematics'
    },
    takeExam : function(){
        console.log(this.name, 'taking exam');
    },
    treatDe: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDe(900);
const remaining2 = student.treatDe(500);
console.log(remaining2);