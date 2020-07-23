var name = "At the top, outside the function (Global)";

function print(){
    window.profile = "Full stack web developer";
    return profile; 
}
console.log(print());
console.log(profile);