//Example:1
const ages1 = [10, 15, 21, 19, 6, 13];
const accessibleAges1 = ages1.map(function(age){
    return (age>=19 ? "Selected" : "Rejected");
});
console.table(accessibleAges1);

//Example:2
const marks = [14, 21, 17, 19, 18, 12, 7];
const passMarks = marks.map(age => (age>=33 ? "Passed" : "Failed"));
console.table(passMarks);