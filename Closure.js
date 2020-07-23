function newProject(n){
    let name = n;
    let count = 0;
    return function(){
        count++;
        console.log("Developer: ",name);
        return `Projects: ${count}`;
    }
}

const developer1 = newProject('Rahat');
const developer2 = newProject('Bustan');
const developer3 = newProject('Shoumik');
console.log(developer1());
console.log(developer1());
console.log(developer2());
console.log(developer2());
console.log(developer3());
console.log(developer3());