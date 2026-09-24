let employees = [
    { name: "ahmed mori", department: "IA"},
    { name: "Mona amin", department: "eco"},
    { name: "mina sis", department: "IA"},
    { name: "Saad sahil", department: "ecom"}
]

function sameDepartment(employees) {
    let result = {};
    for (let employee of employees) {
        let department1 = employee.department;
        console.log(department1);
        
        if (!result[department1]) {
            result[department1] = []
        }
        result[department1].push(employee);
    }
    return result;
}

let value = sameDepartment(employees)
console.log(value);
