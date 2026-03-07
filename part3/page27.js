let employee =["John", "Doe", "bhanu", "bhavani"];
employee =[...employee, "raje", "deepika"];
console.log(employee);

let employees =Array("John", "Doe", "bhanu", "bhavani");
console.log(employees.length);
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);
console.log(employees[3]);
employees.push("raje", "deepika");
console.log(employees);

for(let i=0; i<employees.length; i++){
    console.log(employees[i]);
}

for(let employee of employees){
    console.log(employee);
}