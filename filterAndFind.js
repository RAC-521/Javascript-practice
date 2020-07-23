//Filter return a filtered array
const agesRajshahi = [14, 15, 12, 19, 17, 26, 21, 18, 17, 15];
const selectedRajshahi = agesRajshahi.filter(age => (age>=15 && age<=19));

console.log("Selected for trial: ", selectedRajshahi);

//Find return only the first value that fulfills the criteria/condition
const agesKhulna = [15, 14, 19, 18, 21, 22, 17, 18, 19];
const firstTrial = agesKhulna.find(age => (age>=15 && age<=19));

console.log("First trial: ", firstTrial);