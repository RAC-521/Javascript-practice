class Developer{
    constructor(name, office, salary){
        this.name = name;
        this.office = office;
        this.salary = salary;
    }
}

const developer1 = new Developer('Shobuj', 'Dhanmondi', 50000);
const developer2 = new Developer('Bebuj', 'Mugda', 45000);
const developer3 = new Developer('Tormuj', 'Tangail', 70000);

console.table(developer1);
console.table(developer2);
console.table(developer3);