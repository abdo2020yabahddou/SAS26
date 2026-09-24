let people = [
    { name: "ahmed", age: 13 },
    { name: "samah", age: 27 },
    { name: "fatima", age: 15 }
];

function whoIsOld(people) {
    let oldest = people[0];
    for (let person of people) {
        if (person.age > oldest.age) {
            oldest = person;
        }
    }
    return oldest.name;
}

console.log("Oldest Person:", whoIsOld(people));
