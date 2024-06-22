// Write your solution in this file!
let employee = {
    name: "Mark Njenga",
    streetAddress:"Nairobi, Kilimani"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee={...employee, [key]: value};
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}