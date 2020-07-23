const emp1 = {
    name: 'Arnold',
    salary: 45000,
    netSalary: function(bonus, tax, bill){
        this.salary = this.salary + bonus - tax - bill;
        return this.salary;
    }
}
const emp2 = {
    name: 'Rovman',
    salary: 35000,
}
const emp3 = {
    name: 'Samuel',
    salary: 25000,
}

console.log(emp1);
console.log(emp2);
console.log(emp3);

emp1.netSalary(8000, 250, 510);
emp1.netSalary.call(emp2, 6000, 200, 360); //function of emp1 is used for emp2 through call
emp1.netSalary.apply(emp3, [4000, 150, 320]);//function of emp1 is used for emp3 through apply

console.log(emp1);
console.log(emp2);
console.log(emp3);