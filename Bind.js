const me = {
    name: 'Rahat',
    profile: 'Web developer',
    projects: 8,
    addProjects: function(x=0){
        this.projects = this.projects + x;
        return this.projects;
    }
}
const friend = {
    name: 'Lukman',
    profile: 'Programmer',
    projects: 6,
} 
const Ostad = {
    name: 'Bustan',
    profile: 'Full stack web developer',
    projects: 15,
} 

const friendsProjects = me.addProjects.bind(friend);
const OstadsProjects = me.addProjects.bind(Ostad);

me.addProjects(10);
friendsProjects(20);
OstadsProjects(30);

console.log(`${me.projects}
${friend.projects}
${Ostad.projects}`);