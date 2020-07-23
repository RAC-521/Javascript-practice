const programmer = {
    name: "Bill Gates",
    company: "Microsoft",
    language: "Python, Kotlin",
    getSkill: function(){
        return 'Skill:' + this.language;
    }
}
const developer = {
    name: "Mark Zuckerberg",
    company: "Facebook",
    language: "PHP, JavaScript",
}

console.log(programmer.name, programmer.getSkill()); //Here, for this.language, this refers to object: programmer 
developer.getSkill = programmer.getSkill; //Method exchange between programmer and developer
console.log(developer.name, developer.getSkill()); //Here, for this.language, this refers to object: developer 